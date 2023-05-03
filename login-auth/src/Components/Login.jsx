import React, { useState } from "react";
import './style.css'

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="container">
      <div className="wrapper">
        <label>
          Email
          <input type="text" name={email} />
        </label>
        <label>
          Password:
        <input type="text" name={email} />
        </label>

        <button className="btn">Login</button> 
      </div>
    </div>
    
  );
}

export default Login;
