//  import React from 'react'

import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tech from "./components/Tech"

 
 const App = () => {
   return (
     <>

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
 