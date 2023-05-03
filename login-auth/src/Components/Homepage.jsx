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
          networks, and data from malicious attacks.
        </p>
        <button className="main-btn"> Read More</button>
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
          <button className="cs-btn"> Read More</button>
        </div>
      </div>

      <div className="needs">
        <h2>Who needs cyber security?</h2>
        <p>
          Everyone who is connected to the Internet needs cyber security. This
          is because most cyber attacks are automated and
          <br /> aim to exploit common vulnerabilities rather than specific
          websites or organisations.
        </p>
        <button className="lst-btn"> Read More</button>
      </div>
    </>
  );
}

export default Homepage;
