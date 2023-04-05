import React from "react";
import Woman from "../../assets/Avatars/Woman.png";
import Man from "../../assets/Avatars/Man.png";
import { Link } from "react-router-dom";

const Userprofile = () => {
  function Avatar(e) {
    let avatar = e.target.value;
    localStorage.setItem("Avatar", avatar);
    location.reload();
  }

  return (
    <>
      {(() => {
        let UserData = sessionStorage.getItem("DataUser");
        let UserDataNew = JSON.parse(UserData);
        console.log(UserDataNew);
        return (
          <section className="w-full h-screen flex justify-center items-center">
            <div className="w-4/5 h-4/5 bg-gray-100 rounded-xl border-2 p-2 max-md:min-h-[85%] max-md:min-w-[95%] max-[376px]:mt-5">
              <div className="w-full min-h-[28%] flex gap-5 relative max-sm:min-h-[28%] max-lg:min-h-[30%]">
                {(() => {
                  let AV = localStorage.getItem("Avatar");
                  if (AV !== "Woman") {
                    return <img className="h-36" src={Man} alt="" />;
                  } else {
                    return <img className="h-36" src={Woman} alt="" />;
                  }
                })()}{" "}
                <details className="cursor-pointer h-7 w-36 outline-none ml-10 max-sm:ml-0">
                  <summary className="max-sm:w-20">Avatars</summary>
                  <option
                    onClick={Avatar}
                    value="Woman"
                    className="cursor-pointer border-2 border-gray-200 rounded-md p-0.5 transition-all duration-300 hover:bg-blue-200 hover:border-gray-100"
                  >
                    Woman
                  </option>
                  <option
                    onClick={Avatar}
                    value="Man"
                    className="cursor-pointer border-2 border-gray-200 rounded-md p-0.5 mt-1 transition-all duration-300 hover:bg-blue-200 hover:border-gray-100"
                  >
                    Man
                  </option>
                </details>
                <h1 className="text-4xl">
                  <strong className="h-full flex items-end absolute left-1 bottom-1 pl-3 max-[376px]:text-lg">
                    {UserDataNew[0]}
                  </strong>
                </h1>
                <div className="w-full flex justify-end text-lg text-gray-500 max-sm:text-base">
                  <strong className="absolute max-sm:text-xs">
                    Account info
                  </strong>
                </div>
              </div>
              <div className="w-full flex flex-col pl-4">
                <strong>Last Name</strong>
                <span className="w-2/3 h-12 border-2 flex items-center rounded-md p-1 max-sm:w-full">
                  {UserDataNew[1]}
                </span>
                <strong>Mail</strong>
                <span className=" w-2/3 h-12 border-2 flex items-center rounded-md p-1 max-sm:w-full">
                  {UserDataNew[2]}
                </span>
                <strong>Phone Number</strong>
                <span className=" w-2/3 h-12 border-2 flex items-center rounded-md p-1 max-sm:w-full">
                  {UserDataNew[3]}
                </span>
                <strong>Balance</strong>
                <div className="flex gap-3">
                  <span className=" w-2/3 h-12 border-2 flex items-center rounded-md p-1 max-sm:w-full">
                    {" "}
                    <span className="text-xs">$US</span>
                    {localStorage.getItem("Balance")}
                  </span>
                  <Link
                    to={"/payment_method"}
                    className="rounded-lg p-2 flex gap-1 items-center transition-all text-center duration-200 max-md:text-white max-md:text-sm max-md:bg-green-400 hover:text-white hover:bg-green-400"
                  >
                    <i className="fa-solid fa-plus"></i>Add payment method
                  </Link>
                </div>
              </div>
              <div className="w-full pb-6 h-2/5 flex justify-center items-start pt-5">
                <textarea
                  className="ml-4 h-2/3 min-w-[80%] rounded-lg p-2 resize-none max-sm:h-38 max-[376px]:h-14 max-md:h-38 max-lg:mb-5"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your description"
                ></textarea>
              </div>
            </div>
            <Link
              to={"/RealEstate"}
              className="absolute top-1 right-1 text-white bg-green-400 w-40 h-10 mt-2 mr-2 flex gap-2 justify-center items-center rounded-full"
            >
              Add Real Estate<i className="fa-solid fa-plus"></i>
            </Link>
          </section>
        );
      })()}{" "}
    </>
  );
};

export default Userprofile;
