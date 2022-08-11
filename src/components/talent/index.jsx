import React, { useState } from "react";

const index = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="talent row">
      <div className="col-12 leftSide col-md  p-5">
        <p className="text-right white fontsize-3 fw-1000">Impulsa <br /> tu talento <br /> con:</p>
      </div>
      <div className="col-12 rightside col-md">
        <div className="buttonsWrapper">
          <div className="row buttons py-2">
            <div className="col-3">
              <img src="/img/inmersive.svg" />
            </div>
            <div className="col-9">
              <p
                className="talentSectionButton"
                onClick={() => setSelected("ecosystem")}
              >
                Ecosistema inmersivo
              </p>

              <p
                className={
                  selected === "ecosystem" ? "subTalent active" : "subTalent"
                }
              >
                A diferencia del aprendizaje tradicional, hacemos posible la
                interacción de nuestros alumnos y profesores por medio del
                metaverso.
              </p>
            </div>
          </div>
          <div className="row buttons py-2">
            <div className="col-3">
              <img src="/img/leaders.svg" />
            </div>
            <div className="col-9">
              <p
                className="talentSectionButton"
                onClick={() => setSelected("leaders")}
              >
                Líderes empresariales
              </p>
              <p
                className={
                  selected === "leaders" ? "subTalent active" : "subTalent"
                }
              >
                Obtén el contacto y aprendizaje directamente de los
                profesionales más reconocidos en la industria de la tecnología.
              </p>
            </div>
          </div>
          <div className="row buttons py-2">
            <div className="col-3">
              <img src="/img/opportunities.svg" />
            </div>
            <div className="col-9">
              <p
                className="talentSectionButton"
                onClick={() => setSelected("opportunities")}
              >
                Oportunidades laborales
              </p>
              <p
                className={
                  selected === "opportunities" ? "subTalent active" : "subTalent"
                }
              >
                Gracias al esfuerzo de nuestros líderes, facilitamos la 
                creación de los cursos conforme a la demanda actual 
                del mercado y facilitamos las oportunidades laborales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
