import React, { useState } from "react";
import Contact from "../contact";
const index = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="history">
      <div className="row px-5">
        <div className="leftSide">
          <h2>Nuestra historia</h2>
          <p className="white mobile text-justify">
          El Instituto Universitario de las Habilidades del Futuro surge como un proyecto catalizador que atiende a las problemáticas actuales en la industria de las  Tecnologías de Información a nivel global.
          </p>
          <p className="white no-mobile text-justify">
          El Instituto Universitario de las Habilidades del Futuro surge como un proyecto catalizador que atiende a las problemáticas actuales en la industria de las  Tecnologías de Información a nivel global.<br /> <br />
          En cooperación con especialistas experimentados que actualmente operan en diferentes industrias, niveles de complejidad y distintos puntos geográficos, incorporamos y fomentamos el conocimiento de vanguardia tecnológica.
           <br /> <br /> Formamos capital humano en áreas de alta tecnología que atiende a la demanda
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
