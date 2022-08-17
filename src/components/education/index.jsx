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
  return (
    <div className="education">
      <div className="wrapper">
        <h1>Educación</h1>
        <p>
          Cursos desarrollados por los expertos de la industria de la
          tecnología. Cursos impartidos de manera fisica y en el metaverso
        </p>
      </div>
      <div className="courses">
        <h2> Explora las Especialidades</h2>

        <div className="row py-2">
          <div id="Especialidades" className="col-12 col-md-4">
            <div className={selected === "especialista_seguridad" ? "item py-2 pointer clickable" : "item py-2 pointer clickable"} onClick={() => setSelected("especialista_seguridad")}>
              <img src="/img/computer.svg" />
              <div className="titles py-3">
                <p className="bottom">
                  Especialista de seguridad en redes y datos
                </p>

                {selected === "especialista_seguridad" && 
                  <Link href="especialidad">
                    <button className="knowMore">Saber más</button>
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
        </div>
      </div>
    </div>
  );
};

export default index;
