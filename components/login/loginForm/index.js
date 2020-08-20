import InputForm from '../../common/inputForm';

const LoginForm = ({styles}) => (
    <form>
        <InputForm type="text" styles={styles} placeholder="Email"/>
        <InputForm type="password" styles={styles} placeholder="Password"/>
        <div className={styles.inputs}>
            <button className={styles.loginBtn}>Login</button>
            <span className={styles.registerLink}>Or <a href="/register">Register</a></span>
        </div>
    </form>
);

export default LoginForm;