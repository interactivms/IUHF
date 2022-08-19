import Link from "next/link";
import React, {useState} from "react";
import Carousel from "react-grid-carousel";
const index = () => {

  const [selected, setSelected] = useState("especialista_seguridad")

  const careers = [
    { icon: "/img/cybersecurity.svg", title: "Ciber Seguridad" },
    { icon: "/img/appDev.svg", title: "Desarrollo de aplicaciones" },
    { icon: "/img/cloud.svg", title: "Desarrollo en la nube" },
    {
      icon: "/img/metaverse.svg",
      title: "Desarrollo de espacios en el metaverso",
    },
    { icon: "/img/bigData.svg", title: "Desarrollo y gestión de Big Data" },
  ];

  const next = (e) => {
    e.preventDefault();
    switch (selected) {
      case 'especialista_seguridad':
        setSelected('administrador_aws')
        break;
      case 'administrador_aws':
        setSelected('sd-wan')
        break;
      case 'sd-wan':
        setSelected('especialista_seguridad')
        break;
    }
  }

  const prev = (e) => {
    e.preventDefault();
    switch (selected) {
      case 'especialista_seguridad':
        setSelected('sd-wan')
        break;
      case 'administrador_aws':
        setSelected('especialista_seguridad')
        break;
      case 'sd-wan':
        setSelected('administrador_aws')
        break;
    }
  }
  return (
    <div className="education">
      <div className="wrapper">
        <h1>Educación</h1>
        <p>
          Especialidades desarrolladas por los expertos
          en la industria de la tecnología.
          Cursos impartidos de manera física y en el metaverso.
        </p>
      </div>
      <div className="courses">
        <h2> Explora nuestras especialidades</h2>

        <div className="row py-2">
          <div id="Especialidades" className="col-12 col-md-4">
            <div className={selected === "especialista_seguridad" ? "item py-2 pointer clickable" : "item py-2 pointer clickable"} onClick={() => setSelected("especialista_seguridad")}>
              <img src="/img/computer.svg" />
              <div className="titles py-3">
                <p className="bottom fw-1000">
                  Especialista de seguridad en redes y datos
                </p>

                {selected === "especialista_seguridad" && 
                  <Link href="especialidad">
                    <img className="clickable pointer" src="/img/saberMas.png" />
                  </Link>
                }
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="item py-2 pointer clickable admin-aws" onClick={() => setSelected("administrador_aws")}>
              <img src="/img/SDWAN.svg" />
              <div className="titles py-3">
                <p className="bottom">Especialista de seguridad en hackeo ético y nube</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="item py-2 pointer clickable sd-wan" onClick={() => setSelected("sd-wan")}>
              <img src="/img/CCNA.svg" />
              <div className="titles py-3">
                <p className="bottom">Especialista de Monitoreo <br /> de seguridad y SD-WAN</p>
              </div>
            </div>
            </div>
          </div>

        <br />
        <div className="row mx-0">
          <div className="col-12">
            <h2> Explora nuestros cursos</h2>

            <div className="w-100 no-mobile py-4">
              {
                selected === null ? 
                  <>
                  </>
                :
                  <>
                    {selected === "especialista_seguridad" ? 
                      <div className="row">
                        <div className="col">
                          <img className="w-100 pointer clickable" src="/img/Ciberseguridad.svg" />
                        </div>
                        <div className="col">
                          <img className="w-100 pointer clickable" src="/img/IP.svg" />
                        </div>
                        <div className="col">
                          <img className="w-100 pointer clickable" src="/img/Pensamiento.svg" />
                        </div>
                      </div>
                    : selected === "administrador_aws" ? 
                    <div className="row">
                      <div className="col">
                        <img className="w-100" src="/img/Resolucion.svg" />
                      </div>
                      <div className="col">
                        <img className="w-100" src="/img/Hackeo.svg" />
                      </div>
                      <div className="col">
                        <img className="w-100" src="/img/AWS.svg" />
                      </div>
                    </div>
                    :
                    <div className="row">
                      <div className="col">
                        <img className="w-100" src="/img/LiderazgoSVG.svg" />
                      </div>
                      <div className="col">
                        <img className="w-100" src="/img/SOC.svg" />
                      </div>
                      <div className="col">
                        <img className="w-100" src="/img/SD-WAN.svg" />
                      </div>
                    </div>
                  }
                  </>
              }
            </div>

            {/*
            <div className="row">
              <div className="col-12">
            <Carousel showDots={true} cols={1} loop={true}>
                  {careers.map((item, key) => (
                    <Carousel.Item key={key}>
                        <div className="py-3">
                          <img src={item.icon} />
                          <p> {item.title}</p>
                        </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>

            */}
          </div>

          <div className="col-12">
          <div className="w-100 d-flex justify-content-center align-items-center">
              <img onClick={(e) => prev(e)} className="clickable-l pointer m-1" src="/img/arrowLeft.png" alt="" />
              <img onClick={(e) => next(e)} className="clickable-l pointer m-1" src="/img/arrowRight.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
