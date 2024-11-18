//  import React from 'react'

import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tech from "./components/Tech"

 
 const App = () => {
   return (
     <>
     <div className="fixed -z-10 min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <main className="flex flex-col items-center px-4 md:px-8">

        <Navbar/>
        <Tech/>
        <Project/>
        <Hero/>
        <Contact/>

      </main>

     
     </>
   )
 }
 
 export default App
 