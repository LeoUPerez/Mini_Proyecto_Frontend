import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Img from '../Images/Real-State.png'

const Header = ({Onclick}) => {

  return (
    <section className="w-1/2 h-full pt-2 flex max-md:row max-md:justify-start">
      <div className='h-full min-w-[12%] flex justify-end items-center p-2 max-md:justify-center'>
          <img src={Img} alt="" className="h-28 pt-5" />
      </div>
    </section>
  );
};

export default Header;
