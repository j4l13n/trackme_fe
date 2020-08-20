import styles from './styles/agreement.module.scss';

const Agreement = () => (
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
                        <button className={styles.agreeBtn}>I agree</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Agreement;