import React from 'react'
import Img4 from "/photos/t-img1.avif"
import { FaAngleRight } from "react-icons/fa6";

function Three() {
  return (
    <div>
    <div id="third" className="bg-white flex justify-center  flex-wrap gap-1">
    
        <div id="" className="bg-white w-80 my-6  border-2 rounded-sm font-semibold">
            <img src={Img4} className="w-full"/>
            <div id="details" className="flex  flex-col gap-3 py-10">
                <h1 className="capitalize font-bold text-2xl px-4 text-ellipsis overflow-hidden">Maximise the everyday with Microsoft 365</h1>
                <p className=" px-4">Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                <a href="" className=" px-4"><button className="bg-blue-300 p-2 ">for one person</button></a>
                <a href="" className="underline text-blue-500 px-4">For up to six people <FaAngleRight/></a>
            </div>
        </div>
        <div id="" className="bg-white w-80 my-6 border border-2 rounded-sm font-semibold ">
            <img src={Img4} className="w-full"/>
            <div id="details" className="flex  flex-col gap-3 py-10">
                <h1 className="capitalize font-bold text-2xl px-4">Maximise the everyday with Microsoft 365</h1>
                <p className=" px-4">Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
               
                <a href="" className="underline text-blue-500 px-4 mt-5">For up to six people <FaAngleRight/></a>
            </div>
        </div>
        <div id="" className="bg-white w-80 my-6 border border-2 rounded-sm font-semibold">
            <img src={Img4} className="w-full"/>
            <div id="details" className="flex  flex-col gap-3 py-10">
                <h1 className="capitalize font-bold text-2xl px-4">Maximise the everyday with Microsoft 365</h1>
                <p className=" px-4">Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
               
                <a href="" className="underline text-blue-500 px-4 mt-5">For up to six people <FaAngleRight/></a>
            </div>
        </div>
        <div id="" className="bg-white w-80 my-6 border border-2 rounded-sm font-semibold">
            <img src={Img4} className="w-full"/>
            <div id="details" className="flex  flex-col gap-3 py-10">
                <h1 className="capitalize font-bold text-2xl px-4">Maximise the everyday with Microsoft 365</h1>
                <p className=" px-4">Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
            
                <a href="" className="underline text-blue-500 px-4 mt-5 ">For up to six people < FaAngleRight /></a>
            </div>
        </div>
        
        
    </div></div>
  )
}

export default Three