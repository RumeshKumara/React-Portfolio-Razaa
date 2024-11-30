// import React from 'react'
import { BiLogoTypescript } from "react-icons/bi";

const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-white md:text-6xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div>
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
      </div>
    </div>
  )
}

export default Tech
