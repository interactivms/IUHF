import React, {useState, useEffect} from "react";
import Image from "next/image";
const index = () => {

  const [currentWindow, setCurrentWindow] = useState(null)

  useEffect(() => {
    setCurrentWindow(window.location.pathname)
  },  [])

  return (
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <a href="/" className="menu-logo">
        <img className="logo" src="/img/Recurso5.svg" alt="IUHF logo" />
      </a>

      <div className="menu">
        <ul className="navMenu">
          <li>
            <a href={currentWindow === "/" ? "#Education" : "/#Education"}>EDUCACIÓN</a>
          </li>
          {/*
            <li>
              <a href="#Blog">BLOG</a>
            </li>
          */}

          <li>
            <a  href={currentWindow === "/" ? "#Contact" : "/#Contact"}>INSCRÍBETE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
