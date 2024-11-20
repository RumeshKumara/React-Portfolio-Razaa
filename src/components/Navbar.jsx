// import React from 'react'
import { useState } from "react"
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = ()=> {
      setIsOpen(!isOpen);
  
  }

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full px-16 py-5 text-white border-b border-b-gray-700 bg-blue-950/30 backdrop-blur-md md:justify-evenly">
      <a href="#home" className="text-3xl font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 hover:opacity-100">
        #Razaa</a>

        <ul className="hidden gap-10 md:flex">
          <a href="#home" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Home</li>
          </a>

          <a href="#tech" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Tech</li>
          </a>

          <a href="#projects" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Projects</li>
          </a>

          <a href="#contact" className="transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100">
            <li>Contact</li>
          </a>
        </ul>

        <ul className="hidden gap-5 md:flex">
          <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-red-500 hover:opacity-100">
            <BsYoutube />
          </li>
          <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
          <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-gray-500 hover:opacity-100">
            <BsTwitterX />
          </li>
          <li className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:text-purple-500 hover:opacity-100">
            <BsGithub />
          </li>

        </ul>

        {isOpen ? (
          <BiX className="block text-4xl md:hidden" onClick={menuOpen}/>
        ) : (
          <BiMenu className="block text-4xl md:hidden" onClick={menuOpen}/>
        )}

        {isOpen && (
          <div className="fixed right-0 top-[84px] flex h-screen flex-col">
            
          </div>
        )}
    </nav>
  )
}

export default Navbar
