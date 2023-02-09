import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex mb-14 text-lightYellow pt-10">
        <h1 className="pt-2 font-LogoFont font-extrabold text-4xl md:ml-5 ml-2  cursor-pointer xl:inline-block">
          <NavLink to="/"> NOURY </NavLink>
        </h1>
      </div>
    </>
  );
};

export default Header;
