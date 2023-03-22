import axios from "axios";
import React, { useEffect, useState } from "react";
import Img from "/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/RealSinName.png";
import "../RegisterRealEstate/scroll.css";
import Swal from "sweetalert2";

const RegisterRealEstate = () => {
  const [Data, setdata] = useState({
    Code: "",
    Property_type: "",
    City: "",
    Sector: "",
    Bedrooms: "",
    Bathrooms: "",
    Parking: "",
    Construction: "",
    Description: "",
    ImageURL: "",
    Status: "",
    Price: 0,
  });

  useEffect(() => {
    Swal.fire({
      title: "Real Estate Info",
      text: "You must fill in the fields that are requested to put the real estate for sale",
    });
  }, []);

  function onchange() {
    setdata({
      Code: code.value,
      Property_type: property_type.value,
      City: city.value,
      Sector: sector.value,
      Bedrooms: bedrooms.value,
      Bathrooms: bathrooms.value,
      Parking: parking.value,
      Construction: construction.value,
      Description: description.value,
      ImageURL: link_image.value,
      Status: state.value,
      Price: price.value,
    });
  }

  function SendData(params) {
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
        .put("http://localhost:3000/api/realestate", Data)
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: "Real Estate Info",
            text: "Your real estate has been added successfully",
          });

          for (let index = 0; index < inputs.length; index++) {
            if (inputs[index].id !== "state") {
              inputs[index].value = "";
            }
          }
        })
        .catch(({ err }) => {
          console.log(err);
        });
    }
  }

  return (
    <section className="w-screen min-h-screen flex justify-center items-center p-3 flex-col gap-3 bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images/createrealstate.avif')]">
      <div
        id="realestateregister"
        className="w-3/4 h-5/6 bg-gray-300 bg-opacity-80 rounded-xl border-2"
      >
        <div className="w-full flex justify-center ">
          <img className="h-28 max-md:h-20 text-blue-500" src={Img} alt="" />
        </div>{" "}
        <form
          action=""
          className="w-full h-full flex p-3  text-sm max-md:flex-col"
        >
          <div className="h-full w-1/2 gap-2 flex flex-col p-2 max-md:w-full ">
            <span>Code:</span>
            <input
              onChange={onchange}
              placeholder="Reference number"
              autoComplete="off"
              type="text"
              id="code"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Property type:</span>
            <input
              onChange={onchange}
              placeholder="Property Type"
              autoComplete="off"
              type="text"
              id="property_type"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>City:</span>
            <input
              onChange={onchange}
              placeholder="City in which it is located"
              autoComplete="off"
              type="text"
              id="city"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Sector:</span>
            <input
              onChange={onchange}
              placeholder="Sector in which it is located"
              autoComplete="off"
              type="text"
              id="sector"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Bedrooms:</span>
            <input
              onChange={onchange}
              placeholder="Number of rooms"
              autoComplete="off"
              type="number"
              id="bedrooms"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Price:</span>
            <input
              onChange={onchange}
              placeholder="Property Price (US)"
              autoComplete="off"
              type="number"
              id="price"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
          </div>

          <div className="h-full w-1/2 gap-2 flex flex-col p-2 relative max-md:w-full">
            <span>Bathrooms:</span>
            <input
              onChange={onchange}
              placeholder="Number of bathrooms"
              autoComplete="off"
              type="number"
              id="bathrooms"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Parking:</span>
            <input
              onChange={onchange}
              placeholder="Number of parking lots"
              autoComplete="off"
              type="number"
              id="parking"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Construction:</span>
            <input
              onChange={onchange}
              placeholder="Construction area in square meters (m2)"
              autoComplete="off"
              type="text"
              id="construction"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Description:</span>
            <input
              onChange={onchange}
              placeholder="Property description"
              autoComplete="off"
              type="text"
              id="description"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Link Image:</span>
            <input
              onChange={onchange}
              placeholder="Link of the real estate image"
              autoComplete="off"
              type="text"
              id="link_image"
              className="w-3/4 h-10 rounded-lg p-2 outline-blue-200 max-md:w-full max-md:h-8"
            />
            <span>Status:</span>
            <input
              type="text"
              id="state"
              readOnly
              value="For sale"
              className="w-3/4 h-10 rounded-lg p-2 outline-red-500 max-md:w-full max-md:h-8"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                SendData();
              }}
              className="absolute right-1 bottom-1 h-10 w-36 rounded-full text-white bg-green-400 max-2xl:relative max-md:mt-2"
            >
              Add real estate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterRealEstate;
