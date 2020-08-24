class Validator {
    /**
     * 
     * @param {String} email 
     */
    isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /**
     * 
     * @param {String} password 
     * @returns true if password is valid
     */
    isPassword(password) {
        if(/\s/.test(password)) {
            return false;
        } else if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param {String} mobile 
     */
    isMobile(mobile) {
        return /(^[+0-9]{1,3})*([0-9]{10,11})$/.test(mobile)
    }

    /**
     * 
     * @param {String} username 
     */
    isUsername(username) {
        return /^[a-zA-Z0-9]+$/.test(username);
    }

    /**
     * 
     * @param {Object} errors 
     */
    isError(errors) {
        let isError = false;
        for (const element in errors) {
            if (errors[element] !== false) {
                isError = true;
            }
        }
        return isError;
    };
}

const validator = new Validator()
export default validator