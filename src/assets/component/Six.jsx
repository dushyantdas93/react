import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";

function six() {
  return (
    <div>
    <div className="flex gap-5 items-center  py-20 md:ml-20 relative">
        <h1 className="text-xl font-semibold capitalize pl-5">follow microsoft</h1>
     <div className="flex gap-5">
    
     <FaXbox  className=""/>
     <FaXTwitter  className=""/>
     <FaYoutube  className=""/>
     </div>
        <a href="" className="underline text-white  px-4 capitalize mt-2 absolute right-10 bottom-4 bg-gray-500 ">back to top <FaLongArrowAltUp className=""/></a>
    
    
        
    
    </div>
    </div>
  )
}

export default six