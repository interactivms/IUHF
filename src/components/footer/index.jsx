import React from "react";

const index = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/img/Recurso 5.svg"></img>
      </div>
      <div className="socials">
        <div className="socialLinks">
          <a className="facebook" href="https://www.facebook.com">
            <img src="/img/socials/facebook.svg" />
          </a>
          <a className="instagram" href="https://www.instagram.com">
            <img src="/img/socials/instagram.svg" />
          </a>
          <a className="linkedin" href="https://www.linkedin.com">
            <img src="/img/socials/linkedin.svg" />
          </a>
        </div>
        <div>
          <p>449 000 00 00</p>
        </div>
      </div>
      <div className="footerLinks">
        <div className="links">
          <a className="link">EDUCACIÓN</a>
          <a className="link">LÍDERES</a>
          <a className="link">BLOG</a>
          <a className="link">CONTACTO</a>
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
