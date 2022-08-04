import React from "react";
import Image from "next/image";
const index = () => {
  return (
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <a href="/" className="menu-logo">
        <img src="/img/Recurso 5.svg" alt="IUHF logo" />
      </a>

      <div className="menu">
        <ul className="navMenu">
          <li>
            <a href="#Education">EDUCACIÓN</a>
          </li>
          <li>
            <a href="#Leaders">LÍDERES</a>
          </li>
          <li>
            <a href="#Blog">BLOG</a>
          </li>
          <li>
            <a href="#Contact">CONTACTO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
