import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Header from "../Header/Header.jsx";
import Card_info_slide from "../Card-Info-Slide/Card_info_slide.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import NavOptions from "../../utils/functions/NavOpen-Close.js";
import slider from "../../utils/functions/Slider.js";
import Mano from "../../assets/Images_Home/Mano.png";
import ManoD from "../../assets/Images_Home/Mano-De.png";
import "../../App.css";
import RealEstateSale from "../Real_Estate_Sale/RealEstateSale.jsx";
import RealEstateInfo from "../ModalRealEstate/RealEstateInfo";

const Home = () => {
  const el = useRef(null);
  const [modalinfo, setmodalinfo] = useState(false);
  const [realestates, setrealestates] = useState([]);
  const [item, setItem] = useState({});

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<strong>That Suits You.</strong>",
        "<strong>Go ahead, it's <br/> your new  home.</strong>",
      ],
      typeSpeed: 100,
      backSpeed: 150,
      Delay: false,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
    slider.slideimages();

    function ActData() {
      setrealestates(JSON.parse(localStorage.getItem("RealEstates")));
    }
    setInterval(ActData, 400);
  }, []);

  function Modalopen(e) {
    let id = e.id;
    for (let index = 0; index < realestates.length; index++) {
      if (realestates[index]._id === id) {
        setItem(realestates[index]);
      }
    }
    setmodalinfo(true);
  }
  function Modalclose() {
    setmodalinfo(false);
    localStorage.removeItem("Estatus");
    location.reload();
  }

  return (
    <section id="slider" className="h-screen w-full  flex flex-col  ">
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
      <div
        id="home"
        className="w-full min-h-[92%] relative flex justify-end items-center mt-16"
      >
        <span className="text-justify absolute top-1 left-1 max-lg:text-sm max-md:text-xs  pt-3 pl-3 ">
          <h1 className="font-black text-7xl text-white max-lg:text-4xl max-2xl:text-5xl max-sm:text-2xl ">
            Find Real Estate
            <br />
            <span ref={el} className="font-extralight"></span>{" "}
          </h1>
        </span>
        <div className="absolute left-1 top-1">
          <img
            src={Mano}
            id="mano-izq"
            className="h-28 mt-56 -ml-1 max-lg:mt-32 max-lg:h-20 max-2xl:h-24 max-2xl:mt-40 max-[400px]:h-10 max-[450px]:mt-28 max-[450px]:h-10 max-sm:h-10 max-sm:mt-28"
          />
        </div>
        <div className="absolute -right-0.3 bottom-1">
          <img
            src={ManoD}
            id="mano-De"
            className="h-32 max-lg:mt-32 max-lg:h-20 max-sm:h-12 max-xl:h-24"
          />
        </div>
        <div className="min-w-[28%] h-1/3 bg-opacity-60 mr-16 text-black rounded-xl flex flex-col items-center gap-4 max-xl:w-1/2 max-xl:h-1/2 max-lg:h-2/3 max-md:min-w-[50%] max-sm:mt-28  max-md:h-2/3 max-sm:w-full max-sm:ml-5 max-sm:">
          <Card_info_slide />
        </div>

        <a
          href={"#RealEstateSale"}
          className="w-16 h-16 absolute ml-3 left-1 bottom-1 flex justify-center items-center bg-blue-400 rounded-full text-white text-lg animate-bounce"
        >
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
      <div>
        <RealEstateSale Modalset={Modalopen} />
      </div>
      <div>
        <RealEstateInfo
          visualize={modalinfo}
          Modalset={Modalclose}
          propertys={item}
        />
      </div>
    </section>
  );
};

export default Home;
