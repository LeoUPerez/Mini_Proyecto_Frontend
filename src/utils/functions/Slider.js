const Slide = {};

Slide.slideimages = () => {
  let slider = document.getElementById("slider");
  let indice = 0;
  var images = [
    "h-screen w-full flex flex-col transition-all duration-200  bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Slider/Apartamento2.jpg')]",
    "h-screen w-full flex flex-col transition-all duration-200  bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Slider/Casa1.jpg')]",
    "h-screen w-full flex flex-col transition-all duration-200  bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Slider/Casa2.jpg')]",
    "h-screen w-full flex flex-col transition-all duration-200  bg-no-repeat bg-cover bg-center bg-[url('/Users/Leo/Desktop/Mini_Proyecto/src/assets/Images_Slider/Casa3.jpg')]",
  ];

  function change_image() {
    slider.className = images[indice];

    if (indice < 3) {
      indice++;
    } else {
      indice = 0;
    }
    localStorage.setItem("Indice", indice);
  }

  change_image();
  setInterval(change_image, 4000);
};
Slide.details = [
  {
    type: "House for sale",
    Address: "Santiago",
    Year: "2013",
    Construction_area: "289² Square Meter",
    Bedrooms: "4",
    Bathrooms: "2",
    description: "Small cozy house, Ideal for singles or couples.",
  },
  {
    type: "House for sale",
    Address: "Gurabo",
    Year: "2010",
    Construction_area: "189² Square Meter",
    Bedrooms: "4",
    Bathrooms: "2",
    description: "Small cozy house, Ideal for singles or couples.",
  },
  {
    type: "House for sale",
    Address: "La Capital",
    Year: "2016",
    Construction_area: "230² Square Meter",
    Bedrooms: "4",
    Bathrooms: "2",
    description: "Small cozy house, Ideal for singles or couples.",
  },
  {
    type: "Apartment",
    Address: "Mao",
    Year: "2000",
    Construction_area: "350² Square Meter",
    Bedrooms: "4",
    Bathrooms: "2",
    description: "Apartment cozy house, Ideal for singles or couples.",
  },
];
export default Slide;
