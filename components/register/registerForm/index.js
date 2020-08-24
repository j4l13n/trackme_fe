import InputForm from '../../common/inputForm';

const RegisterForm = ({styles, errors, handleInput, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <InputForm type="text" error={errors.username} name="username" handleInput={handleInput} styles={styles} placeholder="Username"/>
        <InputForm type="text" error={errors.email} name="email" handleInput={handleInput} styles={styles} placeholder="Email"/>
        <InputForm type="text" error={errors.mobile} name="mobile" handleInput={handleInput} styles={styles} placeholder="Mobile"/>
        <InputForm type="password" error={errors.password} name="password" handleInput={handleInput} styles={styles} placeholder="Password"/>
        <div className={styles.inputs}>
            <button type="submit" className={styles.registerBtn}>Register</button>
            <span className={styles.loginLink}>Or <a href="/login">Login</a></span>
        </div>
    </form>
);

export default RegisterForm;