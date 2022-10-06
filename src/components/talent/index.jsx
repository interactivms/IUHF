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
                  selected === "ecosystem" ? "subTalent active" : "subTalent active"
                }
              >
                IUHF te ofrece una experiencia innovadora al interactuar con docentes y compañeros a través del metaverso.
              </p>
            </div>
          </div>
          <div className="row buttons py-2">
            <div className="col-3">
              <img src="/img/leaders.svg" />
            </div>
            <div className="col-9">
              <p
                className="talentSectionButton no-mobile"
                onClick={() => setSelected("leaders")}
              >
                Experiencia de clase mundial
              </p>
              <p
                className="talentSectionButton mobile"
                onClick={() => setSelected("leaders")}
              >
                Líderes Empresariales
              </p>
              <p
                className={
                  selected === "leaders" ? "subTalent active" : "subTalent active"
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
                className="talentSectionButton no-mobile"
                onClick={() => setSelected("opportunities")}
              >
                Acceso a oportunidades laborales
              </p>
              <p
                className="talentSectionButton mobile"
                onClick={() => setSelected("opportunities")}
              >
                Oportunidades laborales
              </p>
              <p
                className={
                  selected === "opportunities" ? "subTalent active" : "subTalent active"
                }
              >
                IUHF conecta con tu futuro empleo gracias a nuestra red de contactos que aceleran el proceso de reclutamiento.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
