import React from "react";

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
        <h2> Explora los cursos</h2>
        <div className="coursesWrapper">
          <div className="item">
            <img src="/img/computer.svg" />
            <div className="titles">
              <p className="top">Carrera de CiberSeguridad</p>
              <p className="bottom">Experto en analisis de datos</p>
            </div>
          </div>

          <div className="item">
            <img src="/img/SDWAN.svg" />
            <div className="titles">
              <p className="top">Carrera de desarrollo</p>
              <p className="bottom">Experto en SDWAN</p>
            </div>
          </div>
          <div className="item">
            <img src="/img/CCNA.svg" />
            <div className="titles">
              <p className="top">Carrera de CiberSeguridad</p>
              <p className="bottom">Experto en CCNA</p>
            </div>
          </div>
        </div>
        <div className="courses">
          <h2> Nuestras carreras</h2>
          <div className="careers">
            {careers.map((item, key) => (
              <div className="item" key={key}>
                <img src={item.icon} />
                <p> {item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
