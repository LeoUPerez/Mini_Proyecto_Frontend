import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({Onclick}) => {
  function selector_in(e) {
    let target = e.target;

    if (target.id === "Link") {
      let id = target.children[0].id;
      let element_target = document.getElementById(id);
      element_target.className = "w-1.5 h-1.5 rounded-full bg-blue-600";
    }
  }
  function selector_out(e) {
    let target = e.target;

    if (target.id === "Link") {
      let id = target.children[0].id;
      let element_target = document.getElementById(id);
      element_target.className = "w-1.5 h-1.5 rounded-full";
    }
  }

  return (
    <nav id="navbar" className=" h-full flex justify-center pt-4 gap-4  items-center  font-light rounded-xl pb-2 relative max-md:opacity-0 max-md:w-36 max-md:gap-1.5 max-md:flex-wrap">
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" w-20 transition-all duration-300 flex items-center flex-col justify-center max-md:w-64 hover:text-blue-600"
      >
        <div id="circle_decoration_1" className="w-1.5 h-1.5 rounded-full"></div>
        Home
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" transition-all duration-300 w-20 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="circle_decoration_2" className="w-1.5 h-1.5 rounded-full"></div>
        Services
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" transition-all w-20 duration-300 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="circle_decoration_3" className="w-1.5 h-1.5 rounded-full"></div>
        About us
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" w-20 transition-all duration-300 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="circle_decoration_4" className="w-1.5 h-1.5 rounded-full"></div>
        Contacts
      </Link>
      <Link
      to={'/login'}
        className=" transition-all duration-300 w-20 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="circle_decoration_5" className="w-1.5 h-1.5 rounded-full"></div>
                    {/*Funcion IIFE */}
                    {(() => {
                        if (sessionStorage.length !== 0) {
                        return (
                            <span className="fa-solid fa-user font-light text-xs flex gap-1 tracking-widest">{sessionStorage.getItem('User')}</span>
                        );
                        } else{
                        return (
                            <i className="fa-solid fa-user font-light text-xs flex gap-1 tracking-widest"><p>Login</p></i>
                        );
                        } 
                    })()}{" "}
                    {/*Funcion IIFE */}
      </Link>
      <button onClick={Onclick}  className="absolute top-1 right-1 p-1 bg-red-500 flex justify-center items-center rounded-full text-sm w-6 h-6 opacity-0 max-md:opacity-100">X</button>
    </nav>
  );
};

export default NavBar;
