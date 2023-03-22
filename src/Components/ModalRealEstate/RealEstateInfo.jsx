import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const RealEstateInfo = ({ visualize, Modalset, propertys }) => {
  async function Confirm_purchase() {
    let balance = await localStorage.getItem("Balance");
    if (balance !== null) {
      if (parseInt(balance) < parseInt(propertys.Price)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You do not have enough balance to make this purchase",
        });
      } else {
        const Newpropertys = {
          Code: propertys._id,
          Property_type: propertys.Property_type,
          City: propertys.City,
          Sector: propertys.Sector,
          Bedrooms: parseInt(propertys.Bedrooms),
          Bathrooms: parseInt(propertys.Bathrooms),
          Parking: parseInt(propertys.Parking),
          Construction: propertys.Construction,
          Description: propertys.Description,
          ImageURL: propertys.ImageURL,
          Price: propertys.Price,
          Status: "Sold",
        };

        axios
          .put("http://localhost:3000/api/realestate", Newpropertys)
          .then(({ data }) => {})
          .catch(({ err }) => {
            console.log(err);
          });

        Swal.fire({
          icon: "success",
          title: "Yeihhhhhh!",
          text: "Congratulations, you have successfully acquired this property",
        });
        let newBalance = (await parseInt(balance)) - parseInt(propertys.Price);

        let Token = await {
          token: sessionStorage.getItem("token"),
          newbalance: newBalance,
        };
        localStorage.setItem("Balance", newBalance);

        axios
          .put("http://localhost:3000/api/usuarios", Token)
          .then(({ data }) => {})
          .catch(({ err }) => {
            console.log(err);
          });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You do not have enough balance to make this purchase, go to your profile to add a payment method",
      });
    }
  }

  return (
    <section
      id="modalinfo"
      className={
        visualize
          ? "w-full h-screen bg-opacity-40 z-50 bottom-1 fixed bg-gray-400 flex justify-center items-center"
          : "w-full h-screen bg-opacity-40 fixed bg-gray-400 flex justify-center items-center"
      }
    >
      <div className="w-2/5 h-5/6 bg-white relative max-md:min-w-[90%]">
        <button
          onClick={Modalset}
          className="text-red-500 absolute p-2 right-1 text-2xl"
        >
          <strong>X</strong>
        </button>
        <div className="w-full">
          <img src={propertys.ImageURL} className="w-full h-64" alt="" />
        </div>
        <div className="w-full flex justify-center text-sm text-gray-400">
          {propertys.Property_type} • {propertys.City} • {propertys.Sector}{" "}
          •Ref:{propertys._id}
        </div>
        <div className="w-full h-1/6 text-3xl flex justify-center items-center max-lg:text-xl max-md:text-lg text-center">
          <strong>{propertys.Description}</strong>
        </div>
        <div className="flex gap-5 w-full justify-center">
          <span>
            <i className="fa-solid fa-bed"></i>{" "}
            <strong>{propertys.Bedrooms}</strong>
          </span>
          <span>
            <i className="fa-solid fa-bath"></i>{" "}
            <strong>{propertys.Bathrooms}</strong>
          </span>
          <span>
            <i className="fa-solid fa-ruler-combined">
              {" "}
              {propertys.Construction}
            </i>
          </span>
          <span>
            <i className="fa-solid fa-square-parking"></i>{" "}
            <strong>{propertys.Parking}</strong>
          </span>
        </div>
        <div className="w-full h-24 flex justify-center items-center">
          <span className="text-red-500 text-3xl max-lg:text-xl max-md:text-lg">
            <strong>
              <span className="text-sm">US$</span>
              {propertys.Price}
            </strong>
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={Confirm_purchase}
            className="w-36 h-14 border-2 rounded-lg text-black transition-all duration-200 hover:text-white hover:bg-green-500"
          >
            Confirm purchase
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealEstateInfo;
