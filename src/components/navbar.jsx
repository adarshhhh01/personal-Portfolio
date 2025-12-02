import React from 'react'

const navbar = () => {
  return (
    <div>
         <nav className="grid grid-cols-3 gap-3 w-full fixed z-30  -top-3 mt-0 pt-0 ">
            <span className="p-2 m-3 text-gray-800 md:text-[20px] font-bold ">Adarsh Namdeo</span>
            <li className="grid grid-cols-5 gap-auto p-2 m-3 text-gray-600 font-bold backdrop-blur-xxs">
              <ul><a href="#home" className='hover:border border-gray-700 rounded-2xl px-3 py-1'>Home</a></ul>
              <ul><a href="#services" className='hover:border border-gray-700 rounded-2xl px-3 py-1'>About</a></ul>
              <ul><a href="#about" className='hover:border border-gray-700 rounded-2xl px-3 py-1'>Tech</a></ul>
              <ul><a href="#projects" className='hover:border border-gray-700 rounded-2xl px-3 py-1' >Work</a></ul>
              <ul><a href="#contact" className='hover:border border-gray-700 rounded-2xl px-3 py-1'>Contacts</a></ul>
            </li>
            <div className="grid grid-cols-2 gap-2 w-60 h-10 m-5 absolute  right-0  ">
              <button className="bg-gray-600 text-white rounded-lg ">Resume</button>
              <button className="bg-gray-600 text-white rounded-lg">Lets Talk</button>
            </div>
          </nav>
          </div>
  )
}

export default navbar