import React from "react";
import Company from "./Company";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div className="flex flex-row  bg-black text-white text-center p-10 min-h-screen max-md:flex-col max-md:pt-0">
      <div className="w-1/2 max-md:w-full">
        <h1 className="text-5xl">
          Experience
          <span className="text-myblue text-8xl animate-pulse">.</span>
        </h1>
        <Company />

        <div className="mt-5 ml-72 w-80 max-md:ml-5 border rounded-3xl px-5 py-2 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue">
          <a
            href="./Akash_Kumar_Goswami.pdf"
            target="_blank"
            className="link-arrow text-decoration-none text-light"
          >
            Click here to view my full Résumé
          </a>
          <svg
            className="inline-block w-6 h-6 ml-2 rotate-0 fill-myblue"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>arrow-right</title>
            <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </svg>
        </div>
      </div>
      <div className="w-1/2 max-md:w-full">
        <h1 className="text-5xl">
          Education<span className="text-myblue text-8xl animate-pulse">.</span>
        </h1>
        <div className="flex flex-col pt-12 items-center">
          <div className="flex flex-col w-96">
            <div className="flex items-center">
              <img
                src="./kiituniversity_logo.jpeg"
                className="w-10 h-10 rounded-3xl"
                alt="Accenture Logo"
              />
              <div className="text-left pl-8">
                <h5 className="text-2xl">KiiT University</h5>
                <p className="">BTech - Information Technology</p>
                <p>2014 - 2018</p>
              </div>
            </div>
          </div>
          <Link to="/projects">
            <div className="mt-36 border max-md:mt-10 w-52 rounded-3xl px-4 py-2 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue">
              <p>View my projects</p>
              <svg
                className="inline-block w-6 h-6 ml-6 rotate-90 fill-myblue"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>arrow-right</title>
                <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experience;
