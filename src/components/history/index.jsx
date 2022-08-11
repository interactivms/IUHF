import React, { useState } from "react";

const index = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="history">
      <div className="row">
        <div className="leftSide">
          <h2>Nuestra historia</h2>
          <p className="white">
            El Instituto Universitario de las Habilidades del Futuro surge de un
            proyecto catalizador integrado por la visión de dos líderes globales
            de la industria de TI en México.
          </p>
          <button onClick={() => setActive(!active)}>
            {active ? "Esconder" : "Leer Más"}
          </button>
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
      
        <div className={active ? "row expanded" : "row collapsed"}>
          <div className="col-12">
            <p className="white">
              El Instituto Universitario de las Habilidades del Futuro surge de
              un proyecto catalizador integrado por la visión de dos líderes
              globales de la industria de TI en México. <br /> En cooperación
              con especialistas experimentados que actualmente operan en
              diferentes industrias, niveles de complejidad y distintos puntos
              geográficos, incorporamos y fomentamos el conocimiento de
              vanguardia tecnológica. <br /> Formamos capital humano en áreas de
              alta tecnología que atiende a la demanda del mercado y acelera la
              integración de talento al campo laboral.
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default index;
