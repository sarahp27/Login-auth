import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

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
          <Link to={localStorage.getItem("user") ? "/home" : ""}><li>Home</li></Link>
          <Link to={localStorage.getItem("user") ? "/about" : ""}><li>About</li></Link>
          <button className="btn" onClick={() => !localStorage.getItem("user") ? login() : logout()}>{localStorage.getItem("user")  ? "Logout" : ""}</button>
        </ul>
      </div>
    </nav>
  );
  // check
}
export default NavBar;
