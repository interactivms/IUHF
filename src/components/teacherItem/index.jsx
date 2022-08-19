import React from "react";

const index = ({ itemInfo, name, desc, photo, action, className }) => {
  return (
    <div className="teacherItem">
      <div className="leftSide">
        <div className="">
          <img draggable="false" src={photo} alt="photo" />
        </div>
        <div className="nameHolder">
          <p className="pName white">{name}</p>
        </div>
      </div>

      <div className="rightSide">

        <p className="desc">{desc}</p>{" "}

        <img onClick={() => action(itemInfo)} className="clickable pointer w-fit" src="/img/verMas.png" alt="" />
      </div>
    </div>
  );
};

export default index;
