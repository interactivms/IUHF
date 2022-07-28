import React from "react";

const index = () => {
  return (
    <div className="contact">
      <form>
        <input placeholder="Nombre" />
        <div>
          <input placeholder="Correo Electronico" />
          <button>Enviar</button>
        </div>
      </form>
      <h1>Contáctanos</h1>
      <p>Con gusto te atenderemos.</p>
    </div>
  );
};

export default index;
