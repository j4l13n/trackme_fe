import React, {useState, useContext, useEffect} from 'react'
import Router from 'next/router';
import {useMutation} from '@apollo/react-hooks';
import styles from './styles/agreement.module.scss';
import {AGREEMENT} from '../../graphQL/auth/agreement'
import {AuthContext} from '../../pages/_app'


const Agreement = () => {
    const [state] = useContext(AuthContext)

    const [userAgreement, {loading}] = useMutation(AGREEMENT, {
        onCompleted: data => {
            if (data.agreement.success && data.agreement.success.length) {
                Router.push('/now')
            } else {
                console.log(error)
            }
        },
        onError: error => {
            // console.log(error)
        }
    })

    const handleAgreement = (e) => {
        e.preventDefault()
        // send the mutation of agreement to the backend
        try {
            userAgreement({
                variables: {
                    agreement: "ALLOWED"
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className={styles.mainLogo}>
                <img src="/images/trackme-logo@2x.png" alt="Track me logo" />
            </div>
            <div className={styles.row}>
                <div className={styles.column + ' ' + styles.agreementCard}>
                    <div className={styles.card}>
                        <div className={styles.agreeTitle}>Agreement</div>
                        <div className={styles.agreeDesc}>
                            This is an agreement to ensure that you have accepted
                            to track your system when you are logged in only 
                        </div>
                        <div>
                            <button onClick={handleAgreement} className={styles.agreeBtn}>I agree</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agreement;