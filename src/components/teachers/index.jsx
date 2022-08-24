import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import TeacherItem from "../teacherItem";
import Link from "next/link";
import Popup from "./teacherCVpopup";

const index = () => {
  const [smallScreen, setSmallScreen] = React.useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 992) {
      setSmallScreen(true);
    }
  }, []);

  const [selected, setSelected] = useState(null);
  const teachers = [
    {
      photo: "/img/Victor_Perfil.png",
      name: "Victor Hugo Lara Damas",
      className: "victorHugo",
      title:"Consultor Profesional en Tecnologías de Información",
      popupDescription:
        "Consultor Profesional en Tecnologías de Información, y apasionado por la tecnología, ha impartido seminarios y diplomados en instituciones académicas de renombre. Cuenta con más de 30 años de experiencia en el mundo de las TI.",
      description:
        "Consultor Profesional en Tecnologías de Información, y apasionado por la tecnología, ha impartido seminarios y diplomados en instituciones académicas de renombre. Cuenta con más de 30 años de experiencia en el mundo de las TI.",
    },
    {
      photo: "/img/teachers/luisOlayo.svg",
      name: "Luis Miguel Olayo Valles",
      className: "luisOlayo",
      title:"Especialista en redes SD-WAN.",
      popupDescription: 
        "Ingeniero en electrónica de formación, con más de 15 años involucrado en el soporte a los más diversos ambientes de redes. \nEnfocado en el diseño, implementación y soporte deredes corporativas incluyendo diversas tecnologías como Routing, Switching, Firewalls, Balanceador SD-WAN, entre otras. \n A cargo de un centro de excelencia de más de 50 ingenieros en el que mediante mejores prácticas y con base en una dinamica de intercambio de conocimientos y sinergia se logran excelentes resultados en el soporte a clientes",
      description:
        "Ingeniero en Electrónica, es líder de un Centro de Excelencia Académica integrado por más de 50 ingenieros. 15 años involucrado en el soporte a diversos ambientes de redes lo preceden .",
    },
    {
      //   photo: "http://picsum.photos/50/50",
      photo: "/img/teachers/luis.svg",
      name: "Luis Alfonso Ramírez Silva",
      className: "luisRamirez",
      title:"Profesional de tecnologías de la información en redes IP.",
      popupDescription:
      "Catorce años de experiencia administrando y soportando infraestructuras de red de voz y datos de manera agnostica, gestionando ambientes globales con soluciones e integraciones entre diferentes marcas. \nResponsable de equipos de soporte implementando proyectos y mejoras dentro de ambientes productivos de red.",
      
    },
    {
      //   photo: "http://picsum.photos/50/50",
      photo: "/img/Dario.png",
      name: "Darío Medina",
      className: "darioMedina",
      title:"Consultor Profesional en Tecnologías de Información",
      popupDescription:
      "Ingeniero en Tecnologías de la Información y Comunicación área, redes y sistemas, cuenta con más de 9 años gestionando infraestructuras de red de voz y 5 años en soporte de incidencias de dispositivos para empresas de impacto tecnológico.",
      description:
      "Ingeniero en Tecnologías de la Información y Comunicación área, redes y sistemas, cuenta con más de 9 años gestionando infraestructuras de red de voz y 5 años en soporte de incidencias de dispositivos para empresas de impacto tecnológico.",
    }
  ];

  const openPopup = (name) => {
    setSelected(name)
  }

  const closeDialog = () => {
    setSelected(null)
  }

  return (
    <>
      <Popup open={selected != null} name={selected?.name} title={selected?.title} description={selected?.description} className={selected?.className} handleClose={closeDialog} />
      <div className="teachers">
        <div className="row mx-0">
          <div className="col-12">
            <Carousel showDots={true} cols={smallScreen ? 1 : 2} loop={true}>
              {teachers.map((item, key) => (
                <Carousel.Item key={key}>
                  <TeacherItem
                    itemInfo={item}
                    photo={item.photo}
                    name={item.name}
                    className={item.className}
                    desc={item.description}
                    action={openPopup}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="row mx-0 py-3">
          <div className="col-12">
            <div className="video">
              <div className="videoLeft">
                <iframe
                  width="750"
                  height="600"
                  src="https://player.vimeo.com/video/740487199?h=1051bb9e51"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  title="Nuestros Líderes IUHF"
                ></iframe>
              </div>
              <div className="videoRight">
                <div className="title">
                  <p className="titleWithLine p-3">Nuestro personal docente y socios fundadores</p>
                </div>
                <p className="description p-3 mx-0">
                  Nuestros directivos y fundadores son
                  líderes de alto impacto en la industria
                  tecnológica de México y el mundo,
                  preparados para guiarte en
                  las habilidades del futuro.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row w-100 vh-60 px-3 mx-0">
          <div className="col-12 col-md-8">
            <h2 className="white fontsize-3">
              Tu nueva trayectoria <br /> educativa
            </h2>
            <div className="row">
              <div className="col-12 col-md-5">
                <p className="white">
                  Crea tu especialidad conforme a tus necesidades.
                </p>
              </div>
              <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
                <Link href="/trayectoria">
                  <button className="knowMore">Conoce más</button>
                </Link>
              </div>
            </div>
            <p className="gray">Construye tu propio camino.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
