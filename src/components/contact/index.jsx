import React from "react";

const index = () => {
  return (
    <div className="contact relative">
      <div className="row w-100 mx-0">
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="white rem4">¡Contáctanos!</h2>
          <br />
          <h2 className="white fw-light text-center rem4">
            Con gusto te atenderemos.
          </h2>
          <br />
          <br />
        </div>
        <div className="col-sm-12 col-md-6 py-3 px-3 bg-gradient-extra-light br-25 z-1">
          <div className="row mx-0">
            <input className="p-3 my-1" type="text" placeholder="Nombre" />
          </div>
          <div className="row mx-0">
            <input
              className="p-3 my-1"
              type="text"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="row mx-0">
            <textarea className="p-3 my-1" rows={6}  type="text" placeholder="Mensaje" />
          </div>
          <div className="row mx-0">
            <button className="w-fit my-1 py-2 px-5 br-15 mx-auto white contact-button">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="absolute contact-bottom bg-gradient-extra-light-moved">

      </div>
    </div>
  );
};

export default index;
