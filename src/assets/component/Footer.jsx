import React from 'react'

import { IoToggle } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";

function footer() {
  return (
    <div>
    <div className="flex flex-row items-center justify-around text-sm bg-gray-300 w-full py-6">
    
        
        <div className="flex items-center justify-between flex-col  md:flex-row gap-2">
            <div className="flex items-center">
            <FaEarthAmericas/>
                <h1>English(india)</h1>
            </div>
            <div className="flex items-center">
                <IoToggle/>
                <h1>Your privacy Choices</h1>
            </div>
            <div className="flex items-center">
               
                <h1>consumer health privacy</h1>
            </div>
            
        </div>
    
      <div className="flex items-center flex-col md:flex-row  justify-around gap-2 ">
                <div>contact microsoft</div>
                <div>contact microsoft</div>
                <div>contact microsoft</div>
                <div>contact microsoft</div>
                <div>contact microsoft</div>
                <div>contact microsoft</div>
            </div> 
        
    
    
    
    
    </div>
    </div>
  )
}

export default footer