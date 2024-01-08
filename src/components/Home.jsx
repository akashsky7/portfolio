import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex bg-black text-white min-h-screen justify-center text-center items-center flex-col">
            <div className="flex text-center justify-center flex-col">
                <h1 className="text-6xl">Hi, I'm Akash<span className="text-myblue text-8xl">.</span></h1>
                    <p className="text-2xl mt-5">MERN stack developer<span className='text-myblue text-3xl animate-pulse'>_</span></p>
            </div> 
            <Link to='/about'>  
                <div className='mt-10 border rounded-3xl px-4 py-2 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue'>
                        <p>Know Me</p>
                        <svg className="inline-block w-6 h-6 ml-6 rotate-90 fill-myblue" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right</title><path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                </div>
            </Link>
        </div>
  )
}

export default Home