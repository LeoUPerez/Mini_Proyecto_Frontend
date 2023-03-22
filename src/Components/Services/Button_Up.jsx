import React from "react";

const Button_Up = ({ id }) => {
  return (
    <a
      href={"#" + id}
      className="w-16 h-16 flex justify-center items-center bg-red-600 rounded-full text-white text-lg animate-bounce"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
};

export default Button_Up;
