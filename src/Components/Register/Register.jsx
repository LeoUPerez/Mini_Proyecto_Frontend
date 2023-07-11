import axios from "axios";
import React, { useState } from "react";
import Img from "../../assets/Images/RealSinName.png";
import Regex from "../../utils/functions/Regex.js";
import Swal from "sweetalert2";
import "../Register/scroll.css";

const Register = () => {
  const [body, setbody] = useState({
    username: "",
    last_name: "",
    password: "",
    phone: "",
    mail: "",
  });
  const [required_user, setRe_User] = useState(true);
  const [required_last, setRe_Last] = useState(true);
  const [required_pass, setRe_Pass] = useState(true);
  const [required_phone, setRe_Phone] = useState(true);
  const [required_mail, setRe_Mail] = useState(true);

  function onchange(e) {
    let validation;
    let validationphone;

    let user = document.getElementById("Name");
    let lastname = document.getElementById("Last_name");
    let password = document.getElementById("Password");
    let phone_user = document.getElementById("Phone_Number");
    let mail_user = document.getElementById("Mail");
    let Not_valid = document.getElementById(e.target.id);
    let restricted_characters = document.getElementById(
      "restricted_characters"
    );

    if (e.target.id === "Phone_Number") {
      validationphone = Regex.VerifyNumber(phone_user.value);
    } else {
      validation = Regex.Verfify(
        user.value,
        lastname.value,
        password.value,
        mail_user.value
      );
    }

    if (validation || validationphone) {
      setbody({
        username: user.value,
        last_name: lastname.value,
        password: password.value,
        phone: phone_user.value,
        mail: mail_user.value,
      });

      if (user.value !== "") {
        setRe_User(false);
      } else {
        setRe_User(true);
      }
      if (lastname.value !== "") {
        setRe_Last(false);
      } else {
        setRe_Last(true);
      }
      if (password.value !== "") {
        setRe_Pass(false);
      } else {
        setRe_Pass(true);
      }
      if (phone_user.value !== "") {
        setRe_Phone(false);
      } else {
        setRe_Phone(true);
      }
      if (mail_user.value !== "") {
        setRe_Mail(false);
      } else {
        setRe_Mail(true);
      }
      Not_valid.className =
        "w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5";
      restricted_characters.className =
        "text-xs min-w-[75%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]";
    } else {
      Not_valid.className =
        "w-3/4 h-9 outline-red-400 p-2 rounded-lg max-md:w-4/5";
      restricted_characters.className =
        "text-xs min-w-[75%] p-0.5 text-red-600 opacity-100 max-md:min-w-[80%]";
    }
  }
  function SendData() {
    if (
      body.username === "" ||
      body.last_name === "" ||
      body.password === "" ||
      body.phone === "" ||
      body.mail === "" ||
      (body.username === "" &&
        body.last_name === "" &&
        body.password === "" &&
        body.phone === "" &&
        body.mail === "")
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must fill in all fields!",
      });
    } else {
      let inputs = document.querySelectorAll("input");

      axios
        .post("http://localhost:3000/api/usuarios/" + "14d5ds", body)
        .then(({ data }) => {})
        .catch(({ err }) => {
          console.log(err);
        });
      Swal.fire({
        title: "Real State Info",
        text: "Account created successfully, you can log in!",
        icon: "success",
        confirmButtonText: "Ok",
        footer: '<a href="/login">Do you want to login?</a>',
      });

      for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = "";
      }
      setbody({
        username: "",
        last_name: "",
        password: "",
        phone: "",
        mail: "",
      });
    }
  }

  function Display_password() {
    let password = document.getElementById("Password");
    let icon = document.getElementById("icon");

    if (password.type === "text") {
      password.type = "password";
      icon.className = "fa-regular fa-eye-slash cursor-pointer";
    } else {
      password.type = "text";
      icon.className = "fa-solid fa-eye cursor-pointer";
    }
  }

  return (
    <section className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center bg-[url('C:\Users\Leo\Desktop\Mini_Proyecto_Frontend\src\assets\Images\register.jpg')]">
      <div
        id="register"
        className="min-w-[26%] min-h-[60%] bg-blue-100 bg-opacity-50  rounded-2xl p-2 max-md:min-w-[95%] max-md:min-h-[65%]"
      >
        <div className="w-full flex justify-center">
          <img className="h-28 max-md:h-20 text-blue-500" src={Img} alt="" />
        </div>
        <form
          id="formulario"
          action=""
          className="flex flex-col h-1/2s pt-6 justify-center items-center"
        >
          <div
            id="restricted_characters"
            className="text-xs min-w-[75%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]"
          >
            Sorry, only letters (a-z), numbers (0-9) and special characters{" "}
            <br /> (.@-_) are allowed.
          </div>
          <input
            onChange={onchange}
            autoComplete="off"
            type="text"
            name=""
            id="Name"
            placeholder="Name/Username"
            className="w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5"
          />
          <div
            className={
              required_user
                ? "text-xs min-w-[75%] p-0.5 text-red-600 opacity-100 max-md:min-w-[80%]"
                : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]"
            }
          >
            Required field
          </div>
          <input
            onChange={onchange}
            autoComplete="off"
            type="text"
            name=""
            id="Last_name"
            placeholder="Last name"
            className="w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5"
          />
          <div
            className={
              required_last
                ? "text-xs min-w-[75%] p-0.5 text-red-600 opacity-100 max-md:min-w-[80%]"
                : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]"
            }
          >
            Required field
          </div>
          <div className="w-full ml-5 flex items-center justify-center gap-1">
            <input
              onChange={onchange}
              autoComplete="off"
              type="password"
              name=""
              id="Password"
              placeholder="Password"
              className="w-3/4 h-9 outline-blue-200  p-2 rounded-lg max-md:w-4/5"
            />
            <div className="">
              <i
                onClick={Display_password}
                id="icon"
                className="fa-regular fa-eye-slash cursor-pointer"
              ></i>
            </div>
          </div>
          <div
            className={
              required_pass
                ? "text-xs min-w-[75%] p-0.5 text-red-600 opacity-100 max-md:min-w-[80%]"
                : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]"
            }
          >
            Required field
          </div>
          <input
            onChange={onchange}
            autoComplete="off"
            type="tel"
            name=""
            id="Phone_Number"
            placeholder="Phone Number"
            className="w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5"
          />
          <div
            className={
              required_phone
                ? "text-xs min-w-[75%] p-0.5 text-red-600 opacity-100 max-md:min-w-[80%]"
                : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]"
            }
          >
            Required field
          </div>
          <input
            onChange={onchange}
            autoComplete="off"
            type="email"
            name=""
            id="Mail"
            placeholder="Mail"
            className="w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5"
          />
          <div
            className={
              required_mail
                ? "text-xs min-w-[75%] p-0.5 text-red-600 opacity-100 max-md:min-w-[80%]"
                : "text-xs min-w-[60%] p-0.5 text-red-600 opacity-0 max-md:min-w-[80%]"
            }
          >
            Required field
          </div>
        </form>
        <div className="w-full flex justify-center pt-5">
          <button
            onClick={SendData}
            id="btn"
            className="w-44 uppercase bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-200 hover:bg-green-300 hover:text-black max-md:w-44"
          >
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
