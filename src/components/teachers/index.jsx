import React from "react";
import Carousel from "react-grid-carousel";
import TeacherItem from "../teacherItem";
const index = () => {
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
      photo: "http://picsum.photos/50/50",
      //   photo: "/img/teachers/alfonso.png",
      name: "Luis Alfonso Ramírez Silva",
      description:
        "Ingeniero en Tecnologías de la Información y Comunicación área, redes y sistemas, cuenta con más de 9 años gestionando infraestructuras de red de voz y 5 años en soporte de incidencias de dispositivos para empresas de impacto tecnológico.",
    },
  ];
  return (
    <>
      <div className="teachers">
        <Carousel showDots={true} cols={2} loop={true}>
          {teachers.map((item, key) => (
            <Carousel.Item>
              <TeacherItem
                photo={item.photo}
                name={item.name}
                desc={item.description}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default index;
