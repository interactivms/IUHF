import React from "react";

const index = () => {
  return (
    <div className="talent">
      <div className="leftSide">
        <p>Impulsa tu talento con:</p>
      </div>
      <div className="rightside">
        <div className="buttonsWrapper">
          <div className="buttons">
            <div className="imgWrapper">
              <img src="/img/inmersive.svg" />
            </div>
            <p>Ecosistema inmersivo</p>
          </div>
          <div className="buttons">
            <div className="imgWrapper">
              <img src="/img/leaders.svg" />
            </div>
            <p>Líderes empresariales</p>
          </div>
          <div className="buttons">
            <div className="imgWrapper">
              <img src="/img/opportunities.svg" />
            </div>
            <p>Oportunidades laborales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
