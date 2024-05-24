function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email==="") {
        error.email = "Must enter an email."
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Must enter a valid email."
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Must enter a password."
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Wrong password"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;