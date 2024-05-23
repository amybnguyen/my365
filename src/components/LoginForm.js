import React, { useState } from "react";
import './LoginForm.css'

import envelope from './assets/envelope.svg'
import key from './assets/key.svg'
import personCircle from './assets/person-circle.svg'

const LoginForm = () => {
    const initialValues = {username:"", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [action, setAction] = useState("Log In");

  return (
    <>
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">

            {action==="Log In"?<></>:<div className="input">
                <img src={personCircle} alt="" />
                <input type="text" placeholder="Username"/>
            </div>}
            <div className="input">
                <img src={envelope} alt="" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={key} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action==="Sign Up"?<></>:<div className="forgot-password">Forgot your password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
            <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
    </div>
    </>
    
  );
};

export default LoginForm;
