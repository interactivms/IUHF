import React, { useState } from "react";
import Contact from "../contact";
const index = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="history">
      <div className="row px-5">
        <div className="leftSide">
          <h2>Nuestra historia</h2>
          <p className="white mobile">
          El Instituto Universitario de las Habilidades del Futuro surge de un
            proyecto catalizador integrado por la visión de dos líderes globales
            de la industria de TI en México.
          </p>
          <p className="white no-mobile">
            El Instituto Universitario de las Habilidades del Futuro surge de un
            proyecto catalizador integrado por la visión de dos líderes globales
            de la industria de TI en México.<br />
            En cooperación con especialistas experimentados que actualmente operan en
              diferentes industrias, niveles de complejidad y distintos puntos
              geográficos, incorporamos y fomentamos el conocimiento de
              vanguardia tecnológica. <br /> Formamos capital humano en áreas de
              alta tecnología que atiende a la demanda del mercado y acelera la
              integración de talento al campo laboral.
          </p>
        </div>
        <div className="rightSide">
          <iframe
            width="560"
            height="250"
            src="https://player.vimeo.com/video/747097526?h=9aeedb086c"
            title="Nuestra Historia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>  
      <div className="row mx-0 px-0">
      <div className="px-0" id="Contact">
          <Contact history={true} />
        </div>
      </div>
    </div>
  );
};

export default index;
