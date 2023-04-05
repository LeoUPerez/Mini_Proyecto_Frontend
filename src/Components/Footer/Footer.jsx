import React from "react";
import Img from "../../assets/Images/RealSinName.png";
// import Img from "../../../src/assets/Images_Slider/Apartamento2.jpg";


const Footer = () => {
  return (
    <section className="w-full h-14 bg-white flex justify-center items-center bg-opacity-40">
      <div className="w-1/2">
        <img src={Img} className="h-10" alt="" />
      </div>
      <div className="w-1/2 flex gap-4 text-2xl text-blue-500 justify-end">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </section>
  );
};

export default Footer;
