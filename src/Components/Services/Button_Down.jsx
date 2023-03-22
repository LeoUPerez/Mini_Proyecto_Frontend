import React from "react";

const Button_Down = ({ id }) => {
  return (
    <a
      href={"#" + id}
      className="w-16 h-16 flex justify-center items-center bg-blue-400 rounded-full text-white text-lg animate-bounce max-md:h-10 max-md:w-10 max-md:text-xs"
    >
      <i className="fa-solid fa-arrow-down"></i>
    </a>
  );
};

export default Button_Down;
