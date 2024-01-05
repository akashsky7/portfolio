import React from "react";
import ImageTable from "./ImageTable";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="transition-transform ease-in-out duration-700 transform flex flex-col  bg-black text-white  text-center items-center p-10 min-h-screen">
      <div className="text-center">
        <img src="/profile-pic.png" className="h-28 w-28" alt="Profile Pic" />
      </div>
      <div className="pt-8">
        <h1 className="text-5xl">Hello!</h1>
      </div>
      <div className="flex flex-row p-20">
        <div className="w-1/2 p-20 border-r-2 border-myblue">
          <p className="text-2xl text-left">
            With 5.5 years of experience as a MERN Stack Developer, I excel in
            creating robust web applications. Proficient in MongoDB, Express.js,
            React, and Node.js, my expertise spans end-to-end development. I
            specialize in crafting scalable back-end systems, designing
            responsive front-end interfaces, and ensuring seamless data flow.
            Well-versed in RESTful API development, database management, and the
            intricacies of the MERN stack, I bring a wealth of knowledge to
            elevate every project I undertake.
          </p>
        </div>
        <div className="w-1/2 pl-20">
          <div>
            <p><ImageTable /></p>
          </div>
        </div>
      </div>
      <Link to='/experience'>  
                <div className='mt5 border rounded-3xl px-4 py-2 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue'>
                        <p>View my experience</p>
                        <svg className="inline-block w-6 h-6 ml-6 rotate-90 fill-myblue" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right</title><path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                </div>
      </Link>
    </div>
  );
}

export default About;
