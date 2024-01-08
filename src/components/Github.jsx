import React from 'react'
import Project from './Project'
import { Link } from 'react-router-dom'

function Github() {
  return (
    <div className="flex flex-col  bg-black text-white text-center p-10 min-h-screen max-md:pt-0">
      <h1 className="text-5xl">
          Projects
          <span className="text-myblue text-8xl animate-pulse">.</span>
          <Project />
        </h1>
        <div className='mt-28'>
        <Link to='https://github.com/akashsky7' target='_blank' className='flex justify-center'>  
                <div className='mt-10 w-52 border rounded-3xl px-2 justify-center py-2 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue'>
                        <p>GitHub Account</p>
                        <svg className="inline-block w-6 h-6 ml-6 fill-myblue" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right</title><path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                </div>
            </Link>
            <Link to='/contact' className='flex justify-center'>  
                <div className='mt-10 w-52 border rounded-3xl px-2 justify-center py-2 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:border-myblue'>
                        <p>Contact Me</p>
                        <svg className="inline-block w-6 h-6 ml-6 fill-myblue" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right</title><path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                </div>
            </Link>
            </div>
    </div>
  )
}

export default Github