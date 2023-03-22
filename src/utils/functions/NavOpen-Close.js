const Nav = {};

Nav.Open = () => {
  let nv = document.getElementById("navbar");
  let hd = document.getElementById("header");
  let btns = document.getElementById("btns-Open");
  let home = document.getElementById("home");

  hd.className = "w-full h-16 flex fixed z-50 items-start ";
  nv.className =
    "opacity-100 bg-gray-200 z-50 relative gap-2 mt-4 max-md:text-base max-md:w-48 max-md: max-md:pb-10 max-md:flex max-md:justify-center max-md:flex-col max-md:items-center max-md:rounded-lg";
  btns.className = "w-8 h-8 text-xs opacity-0 max-md:opacity-0";
};

Nav.CloseWhite = () => {
  let nv = document.getElementById("navbar");
  let hd = document.getElementById("header");
  let btns = document.getElementById("btns-Open");

  hd.className =
    "w-full h-16 flex z-50 fixed border-b-2 border-gray-200 items-center";
  nv.className =
    "h-full pt-4 w-full text-white flex max-md:opacity-0 items-center gap-4 font-light pb-2 relative max-md:w-36 max-md:gap-1.5 max-md:flex-wrap";
  btns.className = "w-8 h-8 text-base opacity-0 max-md:opacity-100";
};
Nav.CloseBlack = () => {
  let nv = document.getElementById("navbar");
  let hd = document.getElementById("header");
  let btns = document.getElementById("btns-Open");
  let home = document.getElementById("home");

  hd.className =
    "w-full h-16 flex border-b-2 fixed z-50 border-gray-200 items-center ";
  nv.className =
    "h-full pt-4 w-full text-black flex max-md:opacity-0 items-center gap-4 font-light pb-2 relative max-md:w-36 max-md:gap-1.5 max-md:flex-wrap";
  btns.className = "w-8 h-8 text-base opacity-0 max-md:opacity-100";
};

export default Nav;
