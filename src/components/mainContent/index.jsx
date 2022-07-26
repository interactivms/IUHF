import React from "react";

const index = () => {
  return (
    <div className="mainContent">
      <div className="content">
        <div className="h1Holder">
          <h1>Aprende las habilidades del futuro</h1>
        </div>
        <div className="details">
          <p>Carreras</p>
          <div className="separator">|</div>
          <p>Cursos</p>
          <div className="separator">|</div>
          <p>Lideres</p>
        </div>
      </div>
      <div className="photoBackgroud">
        <img draggable="false" src="/img/mainBackground.png" />
      </div>
    </div>
  );
};

export default index;
