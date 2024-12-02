// import React from 'react'

const Contact = () => {
  return (
    <div id="#contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-5xl text-center md:text-7xl">
          <span className="text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text">Get in Touch</span>
        </h1>

        <p className="text-lg font-semibold text-center text-gray-400">
          Want to chat? Send me an E-mail through this button and I will respond
          whenever I can.
        </p>

        <a href="" className="px-5 py-3 text-lg font-bold text-white transition-all duration-300 bg-black border border-indigo-600 rounded-lg shadow-md text-nowrap shadow-indigo-700 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-600">Contact Me</a>
      </div>
    </div>
  )
}

export default Contact
