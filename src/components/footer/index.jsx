import React, { useState, useEffect } from "react";

const index = () => {

  const [currentWindow, setCurrentWindow] = useState(null)

  useEffect(() => {
    setCurrentWindow(window.location.pathname)
  },  [])

  return (
    <footer className="footer">
      <div className="logo">
        <img src="/img/Recurso5.svg"></img>
      </div>
      {/*
      <div className="socials">
        <div className="socialLinks">
          <a className="" href="#">
            <img src="/img/socials/Facebook.svg" />
          </a>
          <a className="" href="#">
            <img src="/img/socials/Instagram.svg" />
          </a>
          <a className="" href="#">
            <img src="/img/socials/linkedin.svg" />
          </a>
        </div>
        <br />
        <div>
          <a href="tel:+524491812542">+52 4491812542</a>
        </div>
      </div>
      */}
      <div className="footerLinks">
        <div className="links">
          <a className="link" href={currentWindow === "/" ? "#Education" : "/#Education"}>EDUCACIÓN</a>
          <a className="link" href={currentWindow === "/" ? "#Teachers" : "/#Teachers"}>CATEDRÁTICOS</a>
          {/*<a className="link">BLOG</a>*/}
          <a className="link" href={currentWindow === "/" ? "#Contact" : "/#Contact"}>INSCRÍBETE</a>
        </div>
        <div className="secondLinks">
          <div className="links">
            <a className="link">Aviso de privacidad</a>
            <a className="link">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
