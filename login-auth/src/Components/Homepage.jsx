import React from "react";
import NavBar from "./NavBar";
import "./style.css";

function Homepage() {
  return (
    <>
      <NavBar />

      <div className="banner">
        <h1 className="head"> Cyber Security </h1>
        <p className="para">
          The practice of defending computers, servers, mobile devices,
          electronic systems,
          <br />
          networks, and data from malicious attacks.{" "}
        </p>
      </div>

      <div className="material">
        <div className="info">
          <h2>Why is Cyber Security Important?</h2>
          <ul>
            <li>It costs of cyber security breaches are rising.</li>
            <li>Cyber attacks are increasingly sophisticated.</li>
            <li>Cyber security is a critical, board-level issue.</li>
            <li>Cyber crime is a big business.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homepage;
