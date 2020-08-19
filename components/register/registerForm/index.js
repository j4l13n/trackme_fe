import InputForm from '../../common/inputForm';

const RegisterForm = ({styles}) => (
    <form>
        <InputForm type="text" styles={styles} placeholder="Username"/>
        <InputForm type="text" styles={styles} placeholder="Email"/>
        <InputForm type="text" styles={styles} placeholder="Mobile"/>
        <InputForm type="password" styles={styles} placeholder="Password"/>
        <div className={styles.inputs}>
            <button className={styles.registerBtn}>Register</button>
            <span className={styles.loginLink}>Or <a href="/login">Login</a></span>
        </div>
    </form>
);

export default RegisterForm;