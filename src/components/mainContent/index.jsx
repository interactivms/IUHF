import React, { useState } from "react";

const index = () => {

  const [open, setOpen] = useState(false)
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
              <div className="col-12 col-md d-flex justify-content-center align-items-center">
                <img onClick={() => setOpen(!open)} className="w-80 pointer clickable mw-100" src="/img/MetaCursos.png" />
              </div>
              {
                open &&
                <div className={open ? "col-12 col-md p-3 transparent-blue-bg appear active" : "col-12 col-md p-3 transparent-blue-bg appear"}>
                  <p className="white">
                    Definición de META-CURSOS: Impartir cursos de manera síncrona entre el mundo físico y el metaverso. Obteniendo experiencias multidimensionales de uso y aplicación.
                  </p>
                </div>
              }
              
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
