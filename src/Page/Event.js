import React from "react";
import LastImg from "../Image/Birthday cake.png";

const Event = ({ data }) => {
  const { Name, Hname, Location, Image } = data;
  return (
    <div>
      <div className="flex xl:flex-row flex-col-reverse xl:px-44 lg:px-32 px-0 lg:py-32 py-0 xl:gap-20 gap-10">
        <div className="xl:w-6/12 w-full px-5 md:px-0 md:text-start md:mx-5">
          <h2 className="text-[#240D57] font-bold text-5xl helvetica-font">
            {Name ? Name : "Birthday Bash"}
          </h2>
          <p className="text-lg text-[#828282] helvetica-font">
            Hosted by{" "}
            <span className="font-bold">{Hname ? Hname : "Elysia"}</span>
          </p>
          <p className="text-lg text-[#828282] helvetica-font">
            Location :{" "}
            <span className="font-bold">{Location ? Location : "Empty"}</span>
          </p>
        </div>
        <div className="xl:w-6/12 w-full">
          <img
            src={Name ? URL.createObjectURL(data.Image[0]) : LastImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
