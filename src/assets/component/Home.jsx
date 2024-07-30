import React from 'react'
import Img1 from "/photos/bg-image1.avif"

function Home() {
  return (
    <div>
      <div id="main" className="border-b-2 w-full">



    <div id="first" className=" w-full"><img src={Img1} className="h-60 w-full md:h-full md:w-full object-right"/>
    
        <div id="detail" className="w-10/12 mx-auto h-1/2 bg-white flex flex-col gap-4 mt-5 md:w-4/12 md:ml-10 md:absolute md:top-1/4 rounded-sm">
            <a href=""><button className="bg-yellow-300 px-4 capitalize rounded-sm font-semibold md:ml-5 md:mt-5 font-bold">New</button></a>
            <h1 className="capitalize text-2xl font-bold md:ml-5">meet surface pro</h1>
    
            <p className=" md:ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima!</p>
            <a href=""><button className="bg-pink-400 px-4 py-2 rounded-sm capitalize md:ml-5 font-semiboldfont-bold">learn more</button></a>
        </div>
   
    </div>

    
    
    
    
    
    
</div>
</div>
  )
}

export default Home