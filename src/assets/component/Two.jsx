import React from 'react'
import { SiWindows } from "react-icons/si";
import { FaFile } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";

function Two() {
  return (
    <div>
    <div id="second" className=" border-b-2  w-full flex  justify-center flex-wrap gap-10 mb-20 md:h-52">
        <div id="" className=" flex flex-col justify-center items-center gap-7"><SiWindows/><a href="" className="capitalize underline text-blue-500 px-10">chooser your microsoft 365</a></div>
        <div id="" className=" flex flex-col justify-center items-center gap-7"><FaXbox/><a href="" className="capitalize underline text-blue-500 px-5">shop xbox</a></div>
        <div id="" className=" flex flex-col justify-center items-center gap-7"><SiWindows/><a href="" className="capitalize underline text-blue-500 px-5">get window 11</a></div>
        <div id="" className=" flex flex-col justify-center items-center gap-7"><FaFile/><a href="" className="capitalize underline text-blue-500 px-10">explore surface devices</a></div>
    </div></div>
  )
}

export default Two