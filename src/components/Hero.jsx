// import React from 'react'
// import  from "/public/images.jpg"
import {  motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-center w-full min-h-screen px-16 py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}

        >
          <img src="image.jpg" alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-600 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-400 md:w[350px]" />
        </motion.div>

        <motion.div 
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-5xl font-light font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 hover:opacity-100 md:text-6xl">Rumesh Kumara</h1>

          <h3 className="text-2xl font-light text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text md:text-2xl">Web Developer <span className="text-2xl font-light text-transparent text-white md:text-2xl">&</span> UI/UX Designer</h3>
          
          <p className="text-sm text-gray-400 md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam soluta non ex voluptas quis cum, rem ipsam deserunt sapiente voluptates nisi odit, nihil culpa aperiam distinctio dolore. Quam, optio architecto.</p>

        </motion.div>

      </div>
      
    </div>
  )
}

export default Hero
