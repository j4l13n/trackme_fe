const InputForm = ({type, styles, placeholder}) => (
    <div className={styles.inputs}>
        <input type={type} className={styles.inputText} placeholder={placeholder} />
    </div>
);

export default InputForm;