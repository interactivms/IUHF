import React, { useEffect } from "react";
import Carousel from "react-grid-carousel";
import TeacherItem from "../teacherItem";
import Link from "next/link";
const index = () => {
  const [smallScreen, setSmallScreen] = React.useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 992) {
      setSmallScreen(true);
    }
  }, []);
  const teachers = [
    {
      photo: "/img/Victor_Perfil.png",
      name: "Victor Hugo Lara Damas",
      description:
        "Consultor Profesional en Tecnologías de Información, y apasionado por la tecnología, ha impartido seminarios y diplomados en instituciones académicas de renombre. Cuenta con más de 30 años de experiencia en el mundo de las TI.",
    },
    {
      photo: "/img/teachers/luis.png",
      name: "Luis Miguel Olayo Valles",
      description:
        "Ingeniero en Electrónica, es líder de un Centro de Excelencia Académica integrado por más de 50 ingenieros. 15 años involucrado en el soporte a diversos ambientes de redes lo preceden .",
    },
    {
      //   photo: "http://picsum.photos/50/50",
      photo: "/img/Dario.png",
      name: "Luis Alfonso Ramírez Silva",
      description:
        "Ingeniero en Tecnologías de la Información y Comunicación área, redes y sistemas, cuenta con más de 9 años gestionando infraestructuras de red de voz y 5 años en soporte de incidencias de dispositivos para empresas de impacto tecnológico.",
    },
  ];

  return (
    <>
      <div className="teachers">
        <div className="row mx-0">
          <div className="col-12">
            <Carousel showDots={true} cols={smallScreen ? 1 : 2} loop={true}>
              {teachers.map((item, key) => (
                <Carousel.Item key={key}>
                  <TeacherItem
                    photo={item.photo}
                    name={item.name}
                    desc={item.description}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-12">
            <div className="video">
              <div className="videoLeft">
                <iframe
                  width="560"
                  height="315"
                  src="https://player.vimeo.com/video/737168646?h=a622836f1a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  title="Nuestros Líderes IUHF"
                ></iframe>
              </div>
              <div className="videoRight">
                <div className="title">
                  <p className="titleWithLine p-3">Nuestro consejo directivo</p>
                </div>
                <p className="description p-3 mx-0">
                  Nuestros profesionistas son líderes de alto impacto en la
                  industria tecnológica de México y el mundo, preparados para
                  guiarte en las habilidades del futuro.
                </p>
                <button className="knowMore"> Conoce Más</button>
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
            <p className="gray">Construye tu propio camino</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
