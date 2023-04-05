import React, { useEffect } from "react";
import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import NavOptions from "../../utils/functions/NavOpen-Close.js";
import Button_Down from "./Button_Down.jsx";
import "../Services/Scroll.css";
import Button_Up from "./Button_Up.jsx";

const Services = () => {
  return (
    <section className="w-full h-screen flex flex-col ">
      <div
        className="w-full h-16 border-b-2 border-gray-200 max-md:border-gray-200 fixed flex items-center max-md:w-full z-50"
        id="header"
      >
        <Header />
        <div className="h-3/4 w-0.5 mt-2 ml-2 bg-white max-md:opacity-0"></div>
        <NavBar
          Onclick={NavOptions.CloseWhite}
          classNav="h-full w-full flex pt-2 gap-4 text-white items-center  font-light rounded-xl pb-2 relative max-md:opacity-0 max-md:w-36 max-md:gap-1.5 max-md:flex-wrap"
        />
        <button
          id="btns-Open"
          onClick={NavOptions.Open}
          className=" w-8 h-8 text-base opacity-0 max-md:opacity-100"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div id="services" className="w-full h-screen">
        <div
          id="services1"
          className="w-full min-h-screen relative flex justify-center items-end gap-5 flex-wrap p-10 bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop//Mini_Proyecto/src/assets/Images_Services/Hall.jpg')] max-md:p-2 max-md:h-2/3 max-lg:h-2/3 max-xl:h-1/2 max-2xl:h-2/6 max-lg:p-2"
        >
          <div className="w-1/3 h-72 flex absolute bottom-1 left-1 mt-20 mr-4 flex-col p-2 bg-opacity-90 rounded-xl max-xl:w-72 max-xl:h-80 max-lg:w-60 max-lg:h-72 max-md:w-56 max-md:h-60 max-[375px]:w-40 max-[375px]:h-92 max-sm:h-72 4 max-sm:w-40 max-[536px]:h-">
            <h2 className="text-4xl text-center text-blue-200 max-md:text-base max-sm:text-xs max-md:w-56">
              <strong>Property Valuation</strong>
            </h2>
            <p className="text-justify max-xl:text-sm max-lg:text-xs p-3 text-white text-lg max-md:w-56">
              <strong>
                {" "}
                As a property valuation service, our real estate agency is
                committed to providing our clients with an accurate and detailed
                evaluation of the value of their property. Our team of highly
                trained professionals has extensive knowledge in the real estate
                market and in property valuation, which allows us to carry out a
                complete valuation of your property.
              </strong>
            </p>
          </div>
          <Button_Down id="services2" />
        </div>

        <div
          id="services2"
          className="w-full min-h-screen flex items-end justify-center p-10 relative bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Services/Kitchen.jpg')]"
        >
          <div className="w-1/3 h-80 flex flex-col absolute top-1 right-20 ml-2 mt-20 p-2 bg-opacity-90 rounded-xl max-xl:w-72 max-xl:h-80 max-lg:w-60 max-lg:h-72 max-md:w-56 max-md:h-60 max-[375px]:w-40 max-[375px]:h-92 max-sm:h-96 max-sm:w-40">
            <h2 className="text-4xl text-center text-blue-200 max-md:text-base max-sm:text-xs max-md:w-56">
              <strong>Advertising and marketing</strong>
            </h2>
            <p className="text-justify max-xl:text-sm max-lg:text-xs p-3 text-white text-lg max-md:w-56">
              <strong>
                Our advertising and marketing service is essential for your
                property to stand out in an increasingly competitive real estate
                market. At our real estate agency, we are committed to using the
                latest marketing tools and strategies to ensure that your
                property receives the most exposure possible and is sold or
                rented quickly and at the best price.
              </strong>
            </p>
          </div>
          <Button_Down id="services3" />
        </div>
        <div
          id="services3"
          className="w-full min-h-screen flex items-end justify-center p-10 relative bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Services/Room.jpg')]"
        >
          <div className="w-1/3 h-52 flex flex-col absolute bottom-1 right-20 p-2 mt-20 ml-4 bg-opacity-90 rounded-xl max-xl:w-72 max-xl:h-80 max-lg:w-60 max-lg:h-72 max-md:w-56 max-md:h-60 max-[375px]:w-40 max-[375px]:h-80 max-sm:h-96 max-sm:w-40 max-[536px]:h-80">
            <h2 className="text-4xl text-center text-blue-200 max-md:text-base max-sm:text-xs max-md:w-56">
              <strong>Legal advice</strong>
            </h2>
            <p className="text-justify max-xl:text-sm max-lg:text-xs p-3 text-white text-lg max-md:w-56 ">
              <strong>
                At our real estate agency, we offer a comprehensive legal advice
                service for our clients. We know that the process of buying,
                selling or renting a property can be complicated and confusing,
                and that is why we are here to help our clients navigate the
                process safely and legally.
              </strong>
            </p>
          </div>
          <Button_Down id="services4" />
        </div>
        <div
          id="services4"
          className="w-full min-h-screen flex items-end justify-center p-10 relative bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Services/Yard.jpg')]"
        >
          <div className="w-1/3 h-80 flex flex-col absolute left-1 top-1 ml-4 mt-20 p-1 bg-opacity-90 rounded-xl max-xl:w-72 max-xl:h-80 max-lg:w-60 max-lg:h-72 max-md:w-56 max-md:h-60 max-[375px]:w-40 max-[375px]:h-80 max-sm:h-80 max-sm:w-40">
            <h2 className="text-4xl text-center text-blue-200 max-md:text-base max-sm:text-xs max-md:w-56">
              <strong>Negotiation and closing of transactions</strong>
            </h2>
            <p className="text-justify max-xl:text-sm max-lg:text-xs p-3 text-white text-lg max-md:w-56">
              <strong>
                At our real estate agency, we offer a transaction negotiation
                and closing service for our clients who want to buy or sell a
                property. We know that the process of negotiating and closing a
                transaction can be complicated and stressful, and that is why we
                are here to help our clients ensure that they get the best deal
                possible.
              </strong>
            </p>
          </div>
          <Button_Up id="services1" />
        </div>
      </div>
    </section>
  );
};

export default Services;
