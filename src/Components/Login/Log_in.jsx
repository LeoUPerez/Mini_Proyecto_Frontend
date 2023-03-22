import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Img from "/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/RealSinName.png";
import Swal from "sweetalert2";
import "../Login/scroll.css";

const Log_in = () => {
  const [body, setbody] = useState({ username: "", password: "" });
  const [required_user, setRe_User] = useState(true);
  const [required_pass, setRe_Pass] = useState(true);

  function onchange() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");

    setbody({
      username: user.value,
      password: pass.value,
    });
    if (user.value !== "") {
      setRe_User(false);
    } else {
      setRe_User(true);
    }
    if (pass.value !== "") {
      setRe_Pass(false);
    } else {
      setRe_Pass(true);
    }
  }

  const Verify_account = async () => {
    if (body.username && body.password !== "") {
      axios
        .post("http://localhost:3000/api/usuarios", body)
        .then(({ data }) => {
          if (data.message !== "user not found") {
            location.href = "/";
            sessionStorage.setItem("User", body.username);
            sessionStorage.setItem("token", data);
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Incorrect user or password!",
            });
          }
        })
        .catch(({ err }) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must fill in all fields!",
      });
    }
  };

  return (
    <section className="w-full h-screen bg-blue-200 flex justify-center items-center  bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/login.jpg')]">
      <div
        id="login"
        className="min-w-[28%] h-2/4 bg-blue-100 bg-opacity-50  rounded-2xl p-2 max-md:min-w-[95%] max-lg:min-w-[45%]"
      >
        <form id="formulario" action="" className="h-full w-full">
          <div className="w-full flex justify-end items-center gap-3">
            <strong className="text-black">Login</strong>
            <Link
              className="w-32 p-0.5 flex justify-center items-center border-2 border-blue-300 text-blue-700 rounded-full"
              to={"/register"}
            >
              <strong>Create Account</strong>
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <img className="h-24 max-md:h-14 text-blue-500" src={Img} alt="" />
          </div>
          <div
            id="inputs"
            className="flex flex-col h-2/5 justify-center items-center relative"
          >
            <input
              onChange={onchange}
              id="user"
              name="user"
              className="w-3/5 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3"
              placeholder="User"
              type="text"
            />
            <div
              className={
                required_user
                  ? "text-xs min-w-[60%] p-0.5 text-red-600 opacity-100 max-md:min-w-[66%]"
                  : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[66%]"
              }
            >
              Required field
            </div>
            <input
              onChange={onchange}
              id="pass"
              name="pass"
              className="w-3/5 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3"
              placeholder="Password"
              type="password"
            />
            <div
              className={
                required_pass
                  ? "text-xs min-w-[60%] p-0.5 text-red-600 opacity-100 max-md:min-w-[66%]"
                  : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[66%]"
              }
            >
              Required field
            </div>
            <div className="w-full flex justify-end pr-2 absolute bottom-1">
              <Link
                className=" text-blue-700 h-9 flex justify-center items-end max-md:text-xs"
                to={"/Mailverification"}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center pt-5">
            {" "}
            {/**/}
            <button
              onClick={(e) => {
                e.preventDefault();
                Verify_account();
              }}
              id="btn"
              className="w-28 uppercase bg-blue-500 rounded-full p-1 font-thin transition-all duration-300 text-white hover:bg-green-300 hover:text-black max-md:w-20"
            >
              <strong>Log in</strong>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Log_in;
