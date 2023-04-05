import React from "react";
import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import NavOptions from "../../utils/functions/NavOpen-Close.js";
import Img from "../../assets/Images/RealSinName.png";
import "../About_Us/scroll.css";

const About_Us = () => {
  return (
    <section className="h-screen w-full flex flex-col">
      <div>
        <div
          className="w-full h-16 border-b-2 border-gray-200 max-md:border-gray-200 flex fixed items-center max-md:w-full"
          id="header"
        >
          <Header />
          <div className="h-3/4 w-0.5 mt-2 ml-2 bg-black max-md:opacity-0"></div>
          <NavBar
            Onclick={NavOptions.CloseBlack}
            classNav="h-full w-full flex pt-2 gap-4 text-black items-center font-light rounded-xl pb-2 relative max-md:opacity-0 max-md:w-36 max-md:gap-1.5 max-md:flex-wrap"
          />
          <button
            id="btns-Open"
            onClick={NavOptions.Open}
            className=" w-8 h-8 text-base text-black opacity-0 max-md:opacity-100"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="w-full absolute flex justify-center top-20">
        <h1 className="text-blue-400 p-2 w-1/2 flex justify-center text-5xl max-md:text-4xl max-sm:w-5/6">
          <strong>About us</strong>
        </h1>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-10">
        <div
          id="aboutUs"
          className="w-2/3 h-3/4 flex border-b-2 border-blue-400  border-t-2  max-lg:flex-col max-lg:items-center max-lg:w-4/5 max-sm:pb-5"
        >
          <div className="h-full w-1/2 flex flex-col justify-center items-center max-lg:h-1/4 max-sm:w-4/5">
            <div className="w-full max-lg:text-center">
              <h2 className="text-3xl text-blue-400 max-lg:text-2xl">
                <strong>Who are we?</strong>
              </h2>
            </div>
            <img src={Img} className="h-2/5 max-lg:h-2/3" alt="" />
          </div>
          <div className="h-full w-1/2 flex flex-col justify-center items-center max-lg:min-w-[90%]">
            <div className="w-full">
              <span className="text-blue-400">
                <strong>
                  Why choose this Real Estate as your real estate advisor?
                </strong>
              </span>
            </div>
            <div className="w-full flex flex-col mt-2">
              <h6>
                <strong>Selling capacity:</strong>
              </h6>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Skilled, experienced and honest sales team.
              </span>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Website with more than 1,700 visits per day.
              </span>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Presence in the main national print and digital newspapers.
              </span>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Network of international strategic partners.
              </span>
            </div>
            <div className="w-full flex flex-col mt-2">
              <h6>
                <strong>Services we offer:</strong>
              </h6>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Advice on buying and selling real estate.
              </span>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Alquiler de propiedades.
              </span>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Tasaciones y estudios de factibilidad.
              </span>
              <span className="text-gray-600 flex gap-1">
                <i className="fa-solid fa-circle-check text-blue-400 text-xl"></i>
                Asesoría legal.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Us;
