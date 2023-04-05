import React, { useState } from "react";
import Img from "../../assets/Images/RealSinName.png";
import Banreservas from "../../assets/Images_Payment_Methods/Banreservas.png";
import Visa from "../../assets/Images_Payment_Methods/Visa.png";
import Mastercard from "../../assets/Images_Payment_Methods/Mastercard.png";
import Swal from "sweetalert2";
import axios from "axios";

const Payment_method = () => {
  const [Datacard, setdatacard] = useState({
    card: {
      card_number: "",
      expiration_year: 0,
      expiration_month: 0,
      verification_code: 0,
      balance: 0,
    },
  });
  let token = sessionStorage.getItem("token");

  function onchange() {
    setdatacard({
      card: {
        card_number: card_number.value,
        expiration_year: expiration_year.value,
        expiration_month: expiration_month.value,
        verification_code: verification_code.value,
        balance: balance.value,
      },
    });
    localStorage.setItem("Balance", balance.value);
  }

  function SendData() {
    let inputs = document.querySelectorAll("input");
    let verify = 0;
    for (let index = 0; index < inputs.length; index++) {
      if (inputs[index].value !== "") {
        verify++;
      }
    }

    if (verify !== inputs.length) {
      Swal.fire({
        icon: "error",
        title: "Opss!",
        text: "You must fill in all fields!",
      });
    } else {
      axios
        .put("http://localhost:3000/api/usuarios/" + token, Datacard.card)
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: "Real Estate Info",
            text: "payment method added successfully",
          });
          for (let index = 0; index < inputs.length; index++) {
            inputs[index].value = "";
          }
        })
        .catch(({ err }) => {
          console.log(err);
        });
    }
  }

  return (
    <section className="w-full h-screen ">
      <div className="fixed">
        <img className="h-24 max-md:h-14 text-blue-500" src={Img} alt="" />
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/2 h-2/3 flex border-2 rounded-lg max-xl:flex-col max-lg:min-w-[90%] max-md:justify-center">
          <div className="w-1/4 h-full flex flex-col p-4 items-center justify-center max-xl:h-28 max-xl:w-full max-xl:flex-row">
            <img src={Banreservas} alt="" className="h-24 max-md:h-14" />
            <img src={Visa} alt="" className="h-24 max-md:h-14" />
            <img src={Mastercard} alt="" className="h-24 max-md:h-14" />
          </div>
          <div className="w-full h-full flex items-center justify-center flex-col gap-2 max-xl:h-1/2 max-md:h-2/5">
            <input
              onChange={onchange}
              type="number"
              id="card_number"
              placeholder="Card number"
              className="w-3/5 h-9 outline-blue-200 p-2 bg-gray-200 border-2 border-gray-300 rounded-lg max-md:w-2/3"
            />
            <input
              onChange={onchange}
              type="number"
              id="expiration_year"
              placeholder="Expiration year"
              className="w-3/5 h-9 outline-blue-200 p-2 bg-gray-200 border-2 border-gray-300 rounded-lg max-md:w-2/3"
            />
            <input
              onChange={onchange}
              type="number"
              id="expiration_month"
              placeholder="Expiration month"
              className="w-3/5 h-9 outline-blue-200 p-2 bg-gray-200 border-2 border-gray-300 rounded-lg max-md:w-2/3"
            />
            <input
              onChange={onchange}
              type="number"
              id="verification_code"
              placeholder="Verification code"
              className="w-3/5 h-9 outline-blue-200 p-2 bg-gray-200 border-2 border-gray-300 rounded-lg max-md:w-2/3"
            />
            <input
              onChange={onchange}
              type="number"
              id="balance"
              placeholder="Balance ($US)"
              className="w-3/5 h-9 outline-blue-200 p-2 bg-gray-200 border-2 border-gray-300 rounded-lg max-md:w-2/3"
            />
            <button
              onClick={SendData}
              className="h-10 w-20 rounded-full bg-green-400 transition-all duration-200 hover:text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment_method;
