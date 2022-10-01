import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../Image/Landing page image.svg";

const Home = () => {
  return (
    <div>
      <div className="flex items-center  py-10 md:mt-3 lg:py-20 px-24 lg:px-32 flex-col-reverse xl:flex-row gradient-background  ">
        <div className="flex xl:justify-end xl:hidden justify-center pt-10 lg:pt-14">
          <NavLink to="/create">
            <button className="btn btn-primary font-bold helvetica-font lg:px-16 lg:py-8 border-0 flex content-center text-base lg:text-xl gradient-button">
              <span>🎉 Create my event</span>
            </button>
          </NavLink>
        </div>

        <div className="xl:w-5/12 w-full flex justify-center">
          <img src={Image} alt="section" />
        </div>

        <div className="xl:w-7-12 w-auto ">
          <div className="">
            <h1 className="lg:text-7xl text-4xl font-bold text-center xl:text-right text-[#240D57] mb-4 helvetica-font">
              Imagine if
              <br />
              <span className="gradient-text">Snapchat</span>
              <br />
              <span className="gradient-text sm:whitespace-wrap;">
                had events.
              </span>
            </h1>
            <p className="font-light xl:pl-36 pl-0 text-center xl:text-right lg:text-3xl text-base mb-14 text-[#4F4F4F]">
              Easily host and share events with your friends across any social
              media.
            </p>
            <div className="xl:flex hidden xl:justify-end justify-center">
              <NavLink Link to="/create">
                <button className="btn btn-primary font-bold helvetica-font px-20 py-8 border-0 flex content-center text-xl  gradient-button">
                  <span>🎉 Create my event</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
