import React, { useEffect, useState } from "react";
import slider from "../../utils/functions/Slider.js";

const Card_info_slide = () => {
  const Date = [];
  const [Datesale, setdatesale] = useState({
    type: "",
    Address: "",
    Year: "",
    Construction_area: "",
    Bedrooms: "",
    Bathrooms: "",
    description: "",
  });
  let contador = 0;

  useEffect(() => {
    function changeinfo(params) {
      Date.shift();
      let indice = localStorage.getItem("Indice");
      Date.push(slider.details[indice]);
      setdatesale({
        type: Date[0].type,
        Address: Date[0].Address,
        Year: Date[0].Year,
        Construction_area: Date[0].Construction_area,
        Bedrooms: Date[0].Bedrooms,
        Bathrooms: Date[0].Bathrooms,
        description: Date[0].description,
      });
      contador = 1;
    }

    if (contador === 1) {
      setInterval(changeinfo, 4000);
    } else {
      setInterval(changeinfo, 100);
    }
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center gap-4 text-white max-lg:justify-end max-md:justify-end">
      <h2 className="w-full flex justify-center text-center text-5xl max-lg:text-4xl">
        <strong>Example real estate</strong>
      </h2>
      <span className="text-3xl text-center max-lg:text-xl">
        <strong>Address: {Datesale.Address} </strong>
      </span>
      <span className="text-3xl text-center max-lg:text-xl">
        <strong>Year: {Datesale.Year}</strong>
      </span>
      <span className="text-3xl text-center max-lg:text-xl">
        <strong>Construction area: {Datesale.Construction_area} </strong>
      </span>
      <span className="text-3xl text-center max-lg:text-xl">
        <strong>Bedrooms: {Datesale.Bedrooms}</strong>
      </span>
      <span className="text-3xl text-center max-lg:text-xl">
        <strong>Bathrooms: {Datesale.Bathrooms}</strong>
      </span>
      <span className="text-3xl text-center max-lg:text-xl">
        <strong>{Datesale.description}</strong>
      </span>
    </section>
  );
};

export default Card_info_slide;
