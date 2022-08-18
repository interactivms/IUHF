import React from "react";

const index = () => {
  return (
    <div className="mainContent">
      <div className="content">
        <div className="h1Holder">
          <h1>Aprende las <br /> habilidades del futuro</h1>
        </div>
        <div className="details appears py-3">
          <h2 className="mb-0 fontsize-3"> <a href="#Education">Especialidades</a> </h2>
          <div className="separator">|</div>
          <h2 className="mb-0 fontsize-3"><a className="clickable" href="#Education">Cursos</a></h2>
          <div className="separator">|</div>
          <h2 className="mb-0 fontsize-3"><a className="clickable" href="#Teachers">Líderes</a></h2>
        </div>
        <div className="details d-flex align-items-center justify-content-center py-3">
          <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
              <img className="w-80" src="/img/MetaCursos.png" />
              </div>
              <div className="col p-3 transparent-blue-bg">
                <p className="white">
                Definición de META-CURSOS: Impartir cursos de manera síncrona en dos mundos híbrido y metaverso. Obteniendo experiencias 
                multidimensionales de uso y aplicación en su conjunto, especialmente en el espectro que combina el mundo físico y el mundo virtual.
                </p>
              </div>
              
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
