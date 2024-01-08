import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between  bg-black text-white max-md:justify-center">
        <NavLink to="/" className="max-md:hidden">
          <div className="flex justify-start p-5 px-10">
            <p className="">
              Akash Kumar Goswami<span className="text-myblue text-xl">.</span>
            </p>
          </div>
        </NavLink>
        <div className="flex justify-end space-x-10 p-5 px-10 max-md:space-x-5 max-md:p-3 max-md:text-sm max-md:justify-center">
          <NavLink to="/">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.home()</span>
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.about()</span>
            </div>
          </NavLink>
          <NavLink to="/experience">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.experience()</span>
            </div>
          </NavLink>
          <NavLink to="/projects">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.projects()</span>
            </div>
          </NavLink>
          <NavLink to="/contact">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.contact()</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
