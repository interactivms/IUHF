import React from "react";

const index = () => {
  return (
    <div className="mainContent">
      <div className="content">
        <div className="h1Holder">
          <h1>Aprende las habilidades del futuro</h1>
        </div>
        <div className="details appears py-3">
          <p className="mb-0"> <a href="#Education">Especialidades</a> </p>
          <div className="separator">|</div>
          <p className="mb-0"><a className="clickable" href="#Education">Cursos</a></p>
          <div className="separator">|</div>
          <p className="mb-0"><a className="clickable" href="#Teachers">Líderes</a></p>
        </div>
        <div className="details d-flex align-items-center justify-content-center py-3">
          <div>

              <img className="w-100" src="/img/MetaCursos.svg" />
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
