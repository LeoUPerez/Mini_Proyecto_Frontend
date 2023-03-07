import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  function selector_in(e) {
    let target = e.target;

    if (target.id === "Link") {
      let id = target.children[0].id;
      let elemento = document.getElementById(id);
      elemento.className = "w-1.5 h-1.5 rounded-full bg-blue-600";
    }
  }
  function selector_out(e) {
    let target = e.target;

    if (target.id === "Link") {
      let id = target.children[0].id;
      let elemento = document.getElementById(id);
      elemento.className = "w-1.5 h-1.5 rounded-full";
    }
  }

  return (
    <nav className=" w-full h-full flex justify-center items-center gap-4 bg-gray-200 font-light rounded-xl pb-2 relative max-md:w-36 max-md:gap-1.5 max-md:flex-wrap">
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" w-20 transition-all duration-300 flex items-center flex-col justify-center max-md:w-64 hover:text-blue-600"
      >
        <div id="Link1" className="w-1.5 h-1.5 rounded-full"></div>
        Home
      </Link>
      {/* <Link
        id="prueba"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id='link2' className='w-1.5 h-1.5 rounded-full'>
        </div>
        Link_2
      </Link>
      <Link
        id="prueba"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id='link3' className='w-1.5 h-1.5 rounded-full'>
        </div>        
        Link_3
      </Link> */}
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" transition-all duration-300 w-20 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="Link4" className="w-1.5 h-1.5 rounded-full"></div>
        Services
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" transition-all w-20 duration-300 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="Link5" className="w-1.5 h-1.5 rounded-full"></div>
        About us
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" w-20 transition-all duration-300 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="Link6" className="w-1.5 h-1.5 rounded-full"></div>
        Contacts
      </Link>
      <Link
      to={'/login'}
        // onMouseEnter={selector_in}
        // onMouseOut={selector_out}
        className=" transition-all duration-300 w-20 flex items-center flex-col justify-center hover:text-blue-600"
      >
        <div id="Link7" className="w-1.5 h-1.5 rounded-full"></div>
          {/* <Link className='hover:text-blue-600 transition-all duration-300' to={'/login'}> */}
                    {/*Funcion IIFE */}
                    {(() => {
                        if (sessionStorage.length !== 0) {
                        return (
                            <span className="fa-solid fa-user font-light text-xs flex gap-1 tracking-widest">{sessionStorage.getItem('Usuario')}</span>
                        );
                        } else{
                        return (
                            <i className="fa-solid fa-user font-light text-xs flex gap-1 tracking-widest"><p>Login</p></i>
                        );
                        } 
                    })()}{" "}
                    {/*Funcion IIFE */}
            {/* </Link> */}
      </Link>

    </nav>
  );
};

export default NavBar;
