import React from "react";
// import { Link } from "react-router-dom";
// import NavBar from "./NavBar";
import Img from '/Users/Leo/Desktop/Mini_Proyecto_Frontend/Mini_Proyecto/src/assets/Images/RealSinName.png'

const Header = () => {

  return (
    <section className=" h-full flex max-md:justify-start max-md:w-3/4 max-sm:w-1/2 ">
      <div className='h-full min-w-[12%] flex justify-end  p-1 max-md:justify-center'>
          <img src={Img} alt="" className="h-14" />
      </div>
    </section>
  );
};

export default Header;
