import axios from "axios";
import React, { useState } from "react";
import Img from "/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/RealSinName.png";
import Swal from "sweetalert2";
import '../Update Password/scroll.css'

const Update_password = () => {
  const [password, setpassword] = useState({ password: "" });
  const [required_pass, setRe_Pass] = useState(true);
  const [required_pass_confirm, setRe_Pass_Con] = useState(true);
  let token = sessionStorage.getItem("token");

  function onchange() {
    let pass = document.getElementById("password");
    let passconfirm = document.getElementById("confirmPass");

    setpassword({
      password: pass.value,
    });

    if (pass.value !== "") {
      setRe_Pass(false);
    } else {
      setRe_Pass(true);
    }
    if (passconfirm.value !== "") {
      setRe_Pass_Con(false);
    } else {
      setRe_Pass_Con(true);
    }
  }

  function Updatepass() {
    let passconfirm = document.getElementById("confirmPass");
    let inputs = document.querySelectorAll("input");

    if (password.password !== "") {
      if (password.password !== passconfirm.value) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Passwords must match!",
        });
      } else {
        axios
          .put("http://localhost:3000/api/usuarios/" + token, password)
          .then(({ data }) => {
            if (data.message !== "Token not valid") {
              Swal.fire({
                icon: "success",
                title: "Real State Info",
                text: "password updated successfully",
              });
              setTimeout(() => {
                location.href='/login'; 
              }, 1000 * 3);
              for (let index = 0; index < inputs.length; index++) {
                inputs[index].value = "";
              }
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Token not valid!",
              });
            }
          })
          .catch(({ err }) => {});
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must fill in all fields!",
      });
    }
  }

  return (
    <>
      {(() => {
        if (token !== null) {
          return (
            <section className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/Updatepass.jpg')]">
              <form id="update" className="min-w-[25%] min-h-[45%] flex flex-col items-center justify-center bg-blue-100 bg-opacity-50 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%]">
                <div className="w-full flex justify-center items-center">
                  <img
                    className="h-20 max-md:h-14 text-blue-500"
                    src={Img}
                    alt=""
                  />
                </div>
                <p className="text-red-600 text-xs pb-2">
                  ¡Enter the new password!
                </p>
                <input
                  onChange={onchange}
                  id="password"
                  type="text"
                  name=""
                  autoComplete="off"
                  placeholder="Password"
                  className="w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3"
                />
                <div
                  className={
                    required_pass
                      ? "text-xs min-w-[65%] p-0.5 text-red-600 opacity-100 max-md:min-w-[65%]"
                      : "text-xs min-w-[65%] p-0.5 text-red-600 opacity-0 max-md:min-w-[65%]"
                  }
                >
                  Required field
                </div>
                <input
                  onChange={onchange}
                  id="confirmPass"
                  type="text"
                  name=""
                  autoComplete="off"
                  placeholder="Confirm password"
                  className="w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3"
                />
                <div
                  className={
                    required_pass_confirm
                      ? "text-xs min-w-[65%] p-0.5 text-red-600 opacity-100 max-md:min-w-[65%]"
                      : "text-xs min-w-[65%] p-0.5 text-red-600 opacity-0 max-md:min-w-[65%]"
                  }
                >
                  Required field
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    Updatepass();
                  }}
                  id="btn"
                  className="w-28 uppercase border-none  border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 max-md:w-20 hover:bg-green-300 hover:text-black"
                >
                  Save
                </button>
              </form>
            </section>
          );
        } else {
          return <p>404 Page not found</p>;
        }
      })()}{" "}
    </>
  );
};

export default Update_password;
