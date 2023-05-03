import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">

      <div className="main">
        <h3>Cyber Security </h3>
      </div>

      <div className="pages">
        <ul>
          <li>Home</li>
          <li>About</li>
          <button className="btn">Login</button>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
