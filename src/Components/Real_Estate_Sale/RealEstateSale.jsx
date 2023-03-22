import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer.jsx";

const RealEstateSale = ({ Modalset }) => {
  const [RealEstates, setrealestate] = useState([]);
  let valid;

  function ConfirmUser(e) {
    let user = sessionStorage.getItem("User");
    if (user !== null) {
      Modalset((e = e.target));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must log in to make a purchase",
      });
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/realestate")
      .then(({ data }) => {
        setrealestate(data);
        localStorage.setItem("RealEstates", JSON.stringify(data));
      })
      .catch(({ err }) => {
        console.log(err);
      });
  }, []);

  return (
    <section
      id="RealEstateSale"
      className="w-full min-h-screen relative p-6 flex flex-wrap gap-2 max-md:flex-col max-md:items-center"
    >
      {RealEstates.map((list) => (
        <div key={list._id}>
          {(() => {
            if (list.Status === "For sale") {
              return (valid = true);
            } else {
              return (valid = false);
            }
          })()}{" "}
          <div
            className={
              valid
                ? "w-72 h-96 border-2 rounded-lg opacity-100 hover:-translate-y-1 hover:transition-all hover:duration-200"
                : "w-72 h-96 border-2 rounded-lg bg-gray-300 z-50 opacity-50"
            }
          >
            <div className="w-full relative">
              <img src={list.ImageURL} className="h-40 w-full" alt="" />
              {(() => {
                if (list.Status === "For sale") {
                  return (
                    <span className="bg-green-500 w-20 flex justify-center rounded-r-full text-white absolute top-1">
                      {list.Status}
                    </span>
                  );
                } else {
                  return (
                    <span className="bg-red-600 w-20 flex justify-center rounded-r-full text-white absolute top-1">
                      {list.Status}
                    </span>
                  );
                }
              })()}{" "}
            </div>
            <div className="text-xs w-full flex justify-center text-gray-400">
              {list.Property_type} • {list.City} • {list.Sector} •Ref:{list._id}
            </div>
            <div className="w-full min-h-[20%] flex justify-center items-center">
              <p className="text-sm">
                <strong>{list.Description}</strong>
              </p>
            </div>
            <div className="flex gap-3 w-full justify-center">
              <span>
                <i className="fa-solid fa-bed"></i>{" "}
                <strong>{list.Bedrooms}</strong>
              </span>
              <span>
                <i className="fa-solid fa-bath"></i>{" "}
                <strong>{list.Bathrooms}</strong>
              </span>
              <span>
                <i className="fa-solid fa-ruler-combined">
                  {" "}
                  {list.Construction}
                </i>
              </span>
              <span>
                <i className="fa-solid fa-square-parking"></i>{" "}
                <strong>{list.Parking}</strong>
              </span>
            </div>
            <div className="w-full h-14 flex justify-center items-center">
              <span className="text-red-500 text-lg">
                <strong>
                  <span className="text-xs">US$</span>
                  {list.Price}
                </strong>
              </span>
            </div>
            <div className="w-full h-11 flex justify-center items-center">
              {(() => {
                let user = sessionStorage.getItem("User");
                if (list.Status === "For sale") {
                  if (user !== "admin") {
                    return (
                      <button
                        id={list._id}
                        onClick={(e) => {
                          e.preventDefault();
                          ConfirmUser(e);
                        }}
                        className="w-20 flex items-center justify-center bg-green-500 rounded-full text-white"
                      >
                        Buy
                      </button>
                    );
                  } else {
                    return (
                      <div className=" flex gap-2">
                        <Link
                          id={list._id}
                          onClick={(e) => {
                            e.preventDefault();
                            ConfirmUser(e);
                          }}
                          className="w-20 flex items-center justify-center bg-green-500 rounded-full text-white"
                        >
                          Buy
                        </Link>
                        <Link className="w-20 flex items-center justify-center bg-blue-500 rounded-full text-white">
                          Edit
                        </Link>
                      </div>
                    );
                  }
                }
              })()}{" "}
            </div>
          </div>
        </div>
      ))}
      <a
        href={"#slider"}
        className="w-16 h-16 absolute z-50 mt-7 right-1 bottom-20 flex justify-center items-center bg-blue-400 rounded-full text-white text-lg animate-bounce"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <div className="w-full flex items-end relative top-4">
        <Footer />
      </div>
    </section>
  );
};

export default RealEstateSale;
