// import React from 'react'
import {  BiLogoDocker, BiLogoGoLang, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-white md:text-6xl">Technologies</h1>

      <div className="grid items-center justify-center grid-cols-5 gap-10 p-5">
        <div>
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
        
        <div>
          <BiLogoGoLang className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoDocker className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>

        <div>
          <BiLogoJava className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
      </div>
    </div>
  )
}

export default Tech
