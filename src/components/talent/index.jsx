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
                IUHF te ofrece una experiencia innovadora al ser posible interactuar con tus docentes y compañeros a través del metaverso.
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
                Aprenderás directamente de los especialistas más reconocidos en la industria de la tecnología.
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
                Con IUHF, es muy fácil conectar con tu futuro empleo gracias a nuestros cursos desarrollados especialmente para cubrir la demanda del mercado actual y futura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
