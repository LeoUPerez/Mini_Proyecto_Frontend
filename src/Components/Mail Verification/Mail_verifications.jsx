import axios from "axios";
import React, { useState } from "react";
import Img from "/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/RealSinName.png";
import Swal from "sweetalert2";
import "../Mail Verification/scroll.css";

const Mail_verifications = () => {
  const [mail, setmail] = useState({ user_mail: "" });
  const [required_mail, setRe_Mail] = useState(true);

  function onchange(params) {
    let mail = document.getElementById("mail");

    setmail({
      user_mail: mail.value,
    });

    if (mail.value !== "") {
      setRe_Mail(false);
    } else {
      setRe_Mail(true);
    }
  }

  function SendData() {
    axios
      .patch("http://localhost:3000/api/usuarios/", mail)
      .then(({ data }) => {
        if (data.message !== "user not found") {
          sessionStorage.setItem("token", data);
          location.href = "/CodeVerification";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Mail not found!",
          });
          console.log(data);
        }
      })
      .catch(({ err }) => {
        console.log(err);
      });
  }

  function check_mail() {
    if (mail.user_mail !== "") {
      SendData();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must fill in all fields!",
      });
    }
  }

  return (
    <section className="w-full h-screen bg-blue-200 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/MailVerification.jpg')]">
      <form
        id="mailverify"
        className="min-w-[25%] min-h-[45%] flex gap-1 flex-col items-center justify-center bg-blue-100 bg-opacity-50 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%] max-lg:min-w-[45%]"
      >
        <div className="w-full flex justify-center items-center">
          <img className="h-20 max-md:h-14 text-blue-500" src={Img} alt="" />
        </div>
        <p className="text-red-600 text-xs pb-2">
          ¡Enter the email you registered with!
        </p>
        <input
          onChange={onchange}
          id="mail"
          type="email"
          name=""
          autoComplete="off"
          placeholder="Enter your mail"
          className="w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3"
        />
        <div
          className={
            required_mail
              ? "text-xs min-w-[65%] p-0.5 text-red-600 opacity-100 max-md:min-w-[65%]"
              : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[60%]"
          }
        >
          Required field
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            check_mail();
          }}
          id="btn"
          className="w-28 uppercase bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 hover:bg-green-300 hover:text-black max-md:w-20"
        >
          Consult
        </button>
      </form>
    </section>
  );
};

export default Mail_verifications;
