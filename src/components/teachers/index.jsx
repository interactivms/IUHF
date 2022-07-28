import React, { useEffect } from "react";
import Carousel from "react-grid-carousel";
import TeacherItem from "../teacherItem";
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
      photo: "/img/teachers/victor.png",
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
      photo: "",
      name: "Luis Alfonso Ramírez Silva",
      description:
        "Ingeniero en Tecnologías de la Información y Comunicación área, redes y sistemas, cuenta con más de 9 años gestionando infraestructuras de red de voz y 5 años en soporte de incidencias de dispositivos para empresas de impacto tecnológico.",
    },
  ];

  return (
    <>
      <div className="teachers">
        <div>
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

        <div className="video">
          <div className="videoLeft">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MZi1dXwCqG8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="videoRight">
            <div className="title">
              <p className="titleWithLine">Nuestro consejo directivo</p>
            </div>
            <p className="description">
              Nuestros profesionistas son líderes de alto impacto en la
              industria tecnológica de México y el mundo, preparados para
              guiarte en las habilidades del futuro.
            </p>
            <button className="knowMore"> Conoce Más</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
