const InputForm = ({type, styles, error, name, placeholder, handleInput}) => (
    <div className={styles.inputs}>
        <input 
            type={type} 
            name={name} 
            onChange={(e) => handleInput(e.target.value, e.target.name)} 
            className={error ? styles.inputTextError : styles.inputText} 
            placeholder={placeholder} 
            required
            />
    </div>
);

export default InputForm;