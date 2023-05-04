import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function NavBar() {

  const navigate = useNavigate()

  const  login = () =>{
    navigate('/')
  }

  const logout = () =>{
    navigate('/')
    localStorage.removeItem('user')
  }

  return (
    <nav class="navbar navbar-dark bg-dark">

      <div className="main">
        <h3>Cyber Security </h3>
      </div>

      <div className="pages">
        <ul>
          <li>Home</li>
          <li>About</li>
          <button className="btn" onClick={() => !localStorage.getItem("user") ? login() : logout()}>{localStorage.getItem("user")  ? "Logout" : ""}</button>
        </ul>
      </div>
    </nav>
  );
  // check
}
export default NavBar;
