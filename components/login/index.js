import styles from './styles/login.module.scss';
import LoginForm from './loginForm';

const LoginComponent = () => (
    <div className={styles.row}>
        <div className={styles.column + ' ' + styles.left}>
            <div className={styles.logoHeader}>
                <img src="/images/trackme-logo@2x.png" className={styles.imageLogo} alt="Track me logo" />
            </div>
            <LoginForm styles={styles} />
        </div>
        <div className={styles.column + ' ' + styles.right}>
            <img src="/images/location-icon-png-4229.png" className={styles.locationMap} alt="Track me map icon" />
        </div>
    </div>
);

export default LoginComponent