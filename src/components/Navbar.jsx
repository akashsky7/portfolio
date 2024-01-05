import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between  bg-black text-white">
        <Link to="/">
          <div className="flex justify-start p-5 px-10">
            <p className="">
              Akash Kumar Goswami<span className="text-myblue text-xl">.</span>
            </p>
          </div>
        </Link>
        <div className="flex justify-end space-x-10 p-5 px-10">
          <Link to="/">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.home()</span>
            </div>
          </Link>
          <Link to="/about">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.about()</span>
            </div>
          </Link>
          <Link to="/experience">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.experience()</span>
            </div>
          </Link>
          <Link to="/projects">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.projects()</span>
            </div>
          </Link>
          <Link to="/contact">
            <div className="transition-transform ease-in-out transform hover:scale-110 hover:text-myblue">
              <span className="navbar__optionsName">.contact()</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
