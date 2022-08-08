import React from "react";

const index = () => {
  return (
    <div className="mainContent">
      <div className="content">
        <div className="h1Holder">
          <h1>Aprende las habilidades del futuro</h1>
        </div>
        <div className="details appears">
          <p>Carreras</p>
          <div className="separator">|</div>
          <p className="">Cursos</p>
          <div className="separator">|</div>
          <p className="">Lideres</p>
        </div>
        <div>
          <div className="metaCursos">
            <button>
              <img src="/img/metacursos.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
