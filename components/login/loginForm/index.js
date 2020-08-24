import InputForm from '../../common/inputForm';

const LoginForm = ({styles, errors, handleInput, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <InputForm 
            type="text" 
            error={errors.email}
            name="email"
            handleInput={handleInput} 
            styles={styles} 
            placeholder="Email"/>
        <InputForm 
            type="password"
            name="password"
            error={errors.password}
            handleInput={handleInput} 
            styles={styles} 
            placeholder="Password"/>
        <div className={styles.inputs}>
            <button className={styles.loginBtn}>Login</button>
            <span className={styles.registerLink}>Or <a href="/register">Register</a></span>
        </div>
    </form>
);

export default LoginForm;