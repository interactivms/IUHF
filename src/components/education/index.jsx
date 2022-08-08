import React from "react";
import Carousel from "react-grid-carousel";
const index = () => {
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
        <div className="coursesWrapper">
          <div className="item">
            <img src="/img/computer.svg" />
            <div className="titles">
              <p className="top">Carrera de CiberSeguridad</p>
              <p className="bottom">
                Especialista de seguridad en redes y datos
              </p>
            </div>
          </div>

          {/*
          <div className="item">
            <img src="/img/SDWAN.svg" />
            <div className="titles">
              <p className="top">Carrera de desarrollo</p>
              <p className="bottom">Administrador de la nube AWS</p>
            </div>
          </div>
          <div className="item">
            <img src="/img/CCNA.svg" />
            <div className="titles">
              <p className="top">Carrera de CiberSeguridad</p>
              <p className="bottom">Administrador de red SD-WAN</p>
            </div>
          </div>
  */}
        </div>

        <div className="row mx-0">
          <div className="col-12">
            <h2> Explora nuestros cursos</h2>

             
            <div className="careers no-mobile">
              {careers.map((item, key) => (
                <div className="item" key={key}>
                  <img src={item.icon} />
                  <p> {item.title}</p>
                </div>
              ))}
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
