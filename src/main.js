import React from 'react'
import Image from './assets/simon-lee-hbFKxsIqclc-unsplash-removebg-preview (2).png'
function Main() {
  return (
    <div style={{backgroundColor:'#0a192f'}}>
        <div className="grid grid-rows-2 md:grid-cols-4 gap-3">
    <div className="font-bold text-4xl mt-10 md:mt-32 md:text-7xl max-w-xl text-slate-400 text-justify ml-10 md:ml-28 col-span-2 ">Hi! I'm
    <h1 className="text-blue-900"> Nahid Nawal 👋</h1>
    
    <span className="text-xl absolute">Software Developer</span>
    <p className="text-sm md:text-base mt-10 font-normal text-left">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at AmatoryIT Ltd.</p>
        </div> 

  
       <div className="hidden md:block"> <img src={Image} alt="sds" style={{position: "relative",left :"220px"}}/></div>

        </div>
    </div>
  )
}

export default Main