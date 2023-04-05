import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ Onclick, classNav }) => {
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

  function Log_out(params) {
    sessionStorage.clear();
    location.reload();
  }
  function Tologin(params) {
    location.href = "/login";
  }
  async function Userprofile(params) {
    let user = sessionStorage.getItem("User");
    await axios
      .get("http://localhost:3000/api/usuarios/" + user)
      .then(({ data }) => {
        sessionStorage.setItem("DataUser", JSON.stringify(data));
        // console.log(data);
      })
      .catch(({ err }) => {
        console.log(err);
      });

    location.href = "/userprofile";
  }

  return (
    <nav id="navbar" className={classNav}>
      <Link
        to={"/"}
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" w-20 transition-all duration-300 flex items-center flex-col justify-center max-md:w-64 hover:text-blue-300"
      >
        <div
          id="circle_decoration_1"
          className="w-1.5 h-1.5 rounded-full"
        ></div>
        Home
      </Link>
      <Link
        to={"/services"}
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" transition-all  duration-300 w-20 flex items-center flex-col justify-center hover:text-blue-300"
      >
        <div
          id="circle_decoration_2"
          className="w-1.5 h-1.5 rounded-full"
        ></div>
        Services
      </Link>
      <Link
        to={"/Aboutus"}
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" transition-all w-20 duration-300 flex items-center flex-col justify-center hover:text-blue-300"
      >
        <div
          id="circle_decoration_3"
          className="w-1.5 h-1.5 rounded-full"
        ></div>
        About us
      </Link>
      <Link
        to={"/Contacts"}
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className=" w-20 transition-all duration-300 flex items-center flex-col justify-center hover:text-blue-300"
      >
        <div
          id="circle_decoration_4"
          className="w-1.5 h-1.5 rounded-full"
        ></div>
        Contacts
      </Link>
      <Link className=" transition-all duration-300 w-20 flex items-center flex-col justify-center ">
        <div
          id="circle_decoration_5"
          className="w-1.5 h-1.5 rounded-full"
        ></div>
        {(() => {
          let user = sessionStorage.getItem("User");
          if (user !== null) {
            return (
              <div className="flex justify-center items-center">
                <span
                  className="fa-solid fa-user text-xs transition-all duration-300 hover:text-blue-300 flex gap-1"
                  onClick={Userprofile}
                >
                  {user}
                </span>
                <span
                  id="log_out"
                  className=" w-20 fa-solid fa-right-from-bracket text-xs flex gap-1 transition-all duration-300 hover:text-red-600 absolute right-1 max-md:bottom-1 max-md:mr-11"
                >
                  <p onClick={Log_out}>Log Out</p>
                </span>
              </div>
            );
          } else {
            return (
              <i className="fa-solid fa-user font-light text-xs flex gap-1 tracking-widest hover:text-blue-300 transition-all duration-300">
                <p onClick={Tologin}>Login</p>
              </i>
            );
          }
        })()}{" "}
      </Link>
      <button
        onClick={Onclick}
        className="absolute top-1 right-1 p-1 bg-red-500 flex justify-center items-center rounded-full text-sm w-6 h-6 opacity-0 max-md:opacity-100"
      >
        X
      </button>
    </nav>
  );
};

export default NavBar;
