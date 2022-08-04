import React from "react";

const index = ({ name, desc, photo }) => {
  return (
    <div className="teacherItem">
      <div className="leftSide">
        <div className="photoWrapper">
          <img draggable="false" src={photo} alt="photo" />
        </div>
        <div className="nameHolder">
          <p className="pName white">{name}</p>
        </div>
      </div>

      <div className="rightSide">

        <p className="desc">{desc}</p>{" "}
        <button className="seeTeacherButton">Ver más </button>
      </div>
    </div>
  );
};

export default index;
