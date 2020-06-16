import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import { login } from '../state/actions/index';

const LogInPage = ({ auth, login }) => {

    let history = useHistory();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => login(data);

    useEffect(() => {
        if (auth.isLoggedIn) {
            history.push('/app');
        }
    }, [auth.isLoggedIn, history])

    // console.log(auth.isLoading)
    // const password = useRef({});
    // password.current = watch("password", "");

    return (
        <div className="flex flex-col">
            <p className="text-5xl">Login</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "That appears to be an invalid email address."
                        }
                    })} />
                {errors.email && <p>{errors.email.message}</p>}

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={register({
                        required: "You must specify a password.",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters."
                        }
                    })} />
                {errors.password && <p>{errors.password.message}</p>}

                {/* <label>Repeat password</label>
                <input
                    name="password_repeat"
                    type="password"
                    placeholder="Password"
                    ref={register({
                        validate: (value) => {
                            return value === password.current || "The passwords do not match."
                        }
                    })}
                />
                {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}

                <input type="submit" />
            </form>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(LogInPage);