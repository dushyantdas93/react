import React from 'react'
import Img3 from '/photos/f-image1.avif'

function Card2() {
  return (
    <div>
        <div id="card2" className=" w-full flex justify-center items-center">
            <div className="">
                <img src={Img3} alt="" />
                <div className="details">
                <h1>Microsoft photos</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit laborum, quia distinctio illo deleniti odit!</p>
                <button>new show</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card2