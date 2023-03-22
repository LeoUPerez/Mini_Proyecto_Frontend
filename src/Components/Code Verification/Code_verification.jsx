import axios from "axios";
import React, { useState } from "react";
import Img from "/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/RealSinName.png";
import Swal from "sweetalert2";
import "../Code Verification/scroll.css";

const Code_verification = () => {
  const [code, setcode] = useState({ code: "" });
  const [required_code, setRe_code] = useState(true);
  let token = sessionStorage.getItem("token");

  function onchange() {
    let codeuser = document.getElementById("code");

    setcode({
      code: codeuser.value,
    });

    if (codeuser.value !== "") {
      setRe_code(false);
    } else {
      setRe_code(true);
    }
  }

  function check_code() {
    if (code.code !== "") {
      axios
        .patch("http://localhost:3000/api/usuarios/" + token, code)
        .then(({ data }) => {
          if (
            data.message !== "Incorrect verification code" &&
            data.message !== "Token not valid"
          ) {
            location.href = "/Update_password";
          } else {
            if (data.message !== "Incorrect verification code") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Token not valid!",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect code!",
              });
            }
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
  }

  return (
    <>
      {(() => {
        if (token !== null) {
          return (
            <section className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/CodeVerify.jpg')]">
              <form
                id="CodeVerification"
                className="min-w-[25%] min-h-[45%] gap-1 flex flex-col bg-opacity-50 items-center justify-center bg-blue-100 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%] max-lg:min-w-[45%]"
              >
                <div className="w-full flex justify-center items-center">
                  <img
                    className="h-20 max-md:h-14 text-blue-500"
                    src={Img}
                    alt=""
                  />
                </div>
                <p className="text-red-600 text-xs pb-2">
                  ¡Enter the code sent to your email!
                </p>
                <input
                  onChange={onchange}
                  id="code"
                  type="email"
                  name=""
                  autoComplete="off"
                  placeholder="Enter your code"
                  className="w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3"
                />
                <div
                  className={
                    required_code
                      ? "text-xs min-w-[65%] p-0.5 text-red-600 opacity-100 max-md:min-w-[65%]"
                      : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[60%]"
                  }
                >
                  Required field
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    check_code();
                  }}
                  id="btn"
                  className="w-28 uppercase bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 max-md:w-20"
                >
                  Verify
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

export default Code_verification;
