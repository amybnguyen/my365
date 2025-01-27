import React, { useState } from "react";
import './LoginForm.css';
import Validation from './LoginValidation';

import envelope from './assets/envelope.svg'
import key from './assets/key.svg'

const LoginForm = () => {
    const [action, setAction] = useState("Log In");

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

  return (
    <>
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <form action="" onSubmit={handleSubmit}>
            <div className="inputs">
                <div className="input">
                    <img src={envelope} alt="" />
                    <input onChange={handleInput} type="email" placeholder="Email" name="email"/>
                    {errors.email && <span className="text-red">{errors.email}</span>}
                </div>
                <div className="input">
                    <img src={key} alt="" />
                    <input onChange={handleInput} type="password" placeholder="Password" name="password"/>
                    {errors.password && <span className="text-red">{errors.password}</span>}
                </div>
            </div>
        <div className="login-redirect" >Don't have an account? <a href="/signup">Sign up here!</a></div>
        <div className="submit-container">
            <button type="submit" className="submit" onClick={()=>{setAction("Log In")}}>Log In</button>
        </div>
        </form>
    </div>
    </>
    
  );
};

export default LoginForm;
