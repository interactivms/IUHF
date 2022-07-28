import React from "react";

const index = () => {
  return (
    <div className="contact">
      {" "}
      <h1>Contáctanos</h1>
      <form>
        <input placeholder="Nombre" />
        <div>
          <input placeholder="Correo Electronico" />
          <button>Enviar</button>
        </div>
      </form>
      <p>Con gusto te atenderemos.</p>
    </div>
  );
};

export default index;
