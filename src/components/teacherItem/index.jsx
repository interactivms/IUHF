import React from "react";

const index = ({ name, desc, photo }) => {
  return (
    <div className="teacherItem">
      <div className="leftSide">
        <div className="photoWrapper">
          <img draggable="false" src={photo} alt="photo" />
        </div>
      </div>

      <div className="rightSide">
        <div className="nameHolder">
          <img src="/img/line.svg" />
          <p className="pName">{name}</p>
        </div>

        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default index;
