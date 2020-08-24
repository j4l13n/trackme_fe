import React, {useState, useContext, useEffect} from 'react'
import Router from 'next/router';
import {useMutation} from '@apollo/react-hooks';
import styles from './styles/login.module.scss';
import LoginForm from './loginForm';
import validator from '../../lib/validator';
import {LOGIN} from '../../graphQL/auth/login';
import { AuthContext } from '../../pages/_app';

const LoginComponent = () => {
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState({})

    const {state, setToken} = useContext(AuthContext)

    // useEffect(() => {
    //     if (state.isAuthenticated) {
    //     Router.replace('/now');
    //     }
    // });

    const [loginUser, {loading}] = useMutation(LOGIN, {
        onCompleted: data => {
            const {token} = data.login
            setToken(token)
            Router.replace('/agreement')
        },
        onError: error => {
            if (error.graphQLErrors[0] && error.graphQLErrors[0].message) {
                setErrors({...errors, submitError: error.graphQLErrors[0].message});
            } else {
                setErrors({...errors, submitError: 'an error occured. please try again'});
            }
        }
    })

    const handleInput = (value, name) => {
        if (name === 'email') {
            if (!validator.isEmail(value)) {
                setErrors({
                    ...errors,
                    email: true
                })
            } else {
                setErrors({
                    ...errors,
                    email: false
                })
                setInputs({
                    ...inputs,
                    email: value
                })
            }
        } else if (name === 'password') {
            if (!validator.isPassword(value)) {
                setErrors({
                    ...errors,
                    password: true
                })
            } else {
                setErrors({
                    ...errors,
                    password: false
                })
                setInputs({
                    ...inputs,
                    password: value
                })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isError(errors)) {
            setErrors({
                ...errors,
                submitError: 'Address the error(s) before you login',
            })
        } else {
            try {
                loginUser({variables: {...inputs}});
            } catch (error) {
                setErrors({...errors, submitError: error.message});
            }
        }
    }
    
    return (
        <div className={styles.row}>
            <div className={styles.column + ' ' + styles.left}>
                <div className={styles.logoHeader}>
                    <img src="/images/trackme-logo@2x.png" className={styles.imageLogo} alt="Track me logo" />
                </div>
                {
                    errors.submitError ? 
                        <div className={styles.error}>
                            {errors.submitError}
                        </div> : null}
                <LoginForm
                    errors={errors}
                    styles={styles}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit} />
            </div>
            <div className={styles.column + ' ' + styles.right}>
                <img src="/images/location-icon-png-4229.png" className={styles.locationMap} alt="Track me map icon" />
            </div>
        </div>
    );
}

export default LoginComponent