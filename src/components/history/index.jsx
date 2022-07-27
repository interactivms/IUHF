import React from "react";

const index = () => {
  return (
    <div className="history">
      <div className="leftSide">
        <h2>Nuestra historia</h2>
        <p>
          El Instituto Universitario de las Habilidades del Futuro surge de un
          proyecto catalizador integrado por la visión de dos líderes globales
          de la industria de TI en México.
        </p>
        <button>Sigue leyendo</button>
      </div>
      <div className="rightSide">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Q3Fg9MiSXBs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default index;
