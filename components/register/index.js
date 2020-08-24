import React, {useState, useContext, useEffect} from 'react'
import {useMutation} from '@apollo/react-hooks';
import Router from 'next/router';
import styles from './styles/register.module.scss';
import RegisterForm from './registerForm';
import validator from '../../lib/validator';
import {REGISTER} from '../../graphQL/auth/register';
import {AuthContext} from '../../pages/_app'

const RegisterComponent = () => {
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState({})

    const [registerUser, {loading}] = useMutation(REGISTER, {
        onCompleted: (data) => {
            if (data.register.errors && data.register.errors.length) {
                setErrors({...errors, submitError: data.register.errors[0]})
            } else if(data.register.success && data.register.success.length) {
                Router.replace('/login')
            } else {
                setErrors({...errors, submitError: 'an error occured. please try again'});
            }
        },
        onError: (error) => {
            if (error.graphQLErrors[0] && error.graphQLErrors[0].message) {
                setErrors({...Errors, submitError: error.graphQLErrors[0].message});
            } else {
                setErrors({...Errors, submitError: 'an error occured. please try again'});
            }
        }
    })

    const handleInput = (value, name) => {
        if (name === "username") {
            // Validate username
            if (!validator.isUsername(value)) {
                setErrors({
                    username: true
                })
            } else {
                setErrors({
                    username: false
                })
                setInputs({
                    ...inputs,
                    username: value
                })
            }
        } else if (name === "email"){
            // validate email
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
        } else if (name === "mobile") {
            // validate mobile
            if (!validator.isMobile(value)) {
                setErrors({
                    ...errors,
                    mobile: true
                })
            } else {
                setErrors({
                    ...errors,
                    mobile: false
                })
                setInputs({
                    ...inputs,
                    mobile: value
                })
            }
        } else if (name === "password") {
            // validate password
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
                submitError: 'Address the error(s) before registering',
            })
        } else {
            try {
                registerUser({variables: {...inputs}});
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
                <RegisterForm
                    errors={errors} 
                    handleSubmit={handleSubmit} 
                    handleInput={handleInput} 
                    styles={styles} />
            </div>
            <div className={styles.column + ' ' + styles.right}>
                <img src="/images/location-icon-png-4229.png" className={styles.locationMap} alt="Track me map icon" />
            </div>
        </div>
    )
}

export default RegisterComponent