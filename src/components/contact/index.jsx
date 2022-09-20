import React, { useState } from "react";
import { sendContact } from "../../../pages/api/api";

const index = (props) => {
  const [successNotification, setSuccessNotification] = useState(null);
  const [notification, setNotification] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const makeContact = async () => {
    if (email !== "" && name !== "" && message !== "") {
      let body = {
        email: email,
        name: name,
        message: message,
      };
      let res = await sendContact(body);
      if (res.data === "Success") {
        setEmail("");
        setName("");
        setMessage("");
        setNotification("")
        setSuccessNotification("¡Correo enviado!");
      }
    } else {
      setNotification("Favor de ingresar todos los datos");
    }
  };
  return (
    <div
      className={
        props.section === "other"
          ? "contact background-darkGray relative"
          : props.history
          ? "contact relative"
          : "contact bg-darkblue relative"
      }
    >
      <div className="row w-100 mx-0">
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="white rem4">¡Inscríbete!</h2>
          <br />
          <h2 className="white fw-light text-center rem4">
            Complementa tu trayectoria profesional.
          </h2>
          <br />
          <br />
        </div>
        <div className="col-sm-12 col-md-6 py-3 px-3 bg-gradient-extra-light br-25 z-1">
          <div className="row mx-0">
            <input
              className="p-3 my-1"
              type="text"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row mx-0">
            <input
              className="p-3 my-1"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="row mx-0">
            <textarea
              className="p-3 my-1"
              rows={6}
              type="text"
              placeholder="Mensaje"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {notification  &&
          <div className="row mx-0">
            <p className="white">{notification}</p>
          </div>
          }
          <div className="row mx-0">
            {successNotification != null ? (
              <p className="white">{successNotification}</p>
            ) : (
              <button
                onClick={() => makeContact()}
                className="w-fit my-2 py-2 px-5 br-15 mx-auto white contact-button"
              >
                Enviar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
