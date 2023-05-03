import React, { useState } from "react";
import './style.css'
import styles from '../modules/login.module.css'
import user from '../utils/user.info.json'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  const emailInput = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const passwordInput = (e) => {
    setPass(e.target.value)
    console.log(pass)
  }

  const submit = (e) =>{
    console.log(user)
    e.preventDefault()
    if(user.email === email && user.password === pass){
      console.log("loged in")
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/home")
    }
    else{
      alert("Username and password is incorrect")
    }
  }

  return (
    <div className={`container ${styles.container}`}>
      <form onSubmit={(e) => submit(e)}>
      <div class={`mb-3 ${styles.fields}`}>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => emailInput(e)} />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class={`mb-3 ${styles.fields}`}>
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => passwordInput(e)}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
