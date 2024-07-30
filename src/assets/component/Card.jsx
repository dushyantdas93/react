import React from 'react'
import Img3 from "/photos/f-image1.avif"

function Card() {
  return (
    <div>     
        <div class="flex flex-wrap -mx-3">

    <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
        <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img src={Img3} alt="Image 1" class="w-full h-48 object-cover"/>
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-2">Card Heading 1</h2>
                <p class="text-gray-700 mb-4 text-sm">This is a description for the first card. It provides some details about the content.</p>
                <a href="#" class="text-blue-500 hover:underline mb-4 block text-sm">Learn More</a>
                <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">Shop Now</button>
            </div>
        </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
        <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img src={Img3} alt="Image 2" class="w-full h-48 object-cover"/>
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-2">Card Heading 2</h2>
                <p class="text-gray-700 mb-4 text-sm">This is a description for the second card. It provides some details about the content.</p>
                <a href="#" class="text-blue-500 hover:underline mb-4 block text-sm">Learn More</a>
                <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">Shop Now</button>
            </div>
        </div>
    </div>
   
    <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
        <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img src={Img3} alt="Image 3" class="w-full h-48 object-cover"/>
            <div class="p-4">
                <h2 class="text-lg font-semibold mb-2">Card Heading 3</h2>
                <p class="text-gray-700 mb-4 text-sm">This is a description for the third card. It provides some details about the content.</p>
                <a href="#" class="text-blue-500 hover:underline mb-4 block text-sm">Learn More</a>
                <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">Shop Now</button>
            </div>
        </div>
    </div>
   
    <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
        <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img src={Img3} alt="Image 4" class="w-full h-48 object-cover"/>
            <div class="p-4">
            <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">New</button>
                <h2 class="text-lg font-semibold mb-2">Card Heading 4</h2>
                <p class="text-gray-700 mb-4 text-sm">This is a description for the fourth card. It provides some details about the content.</p>
                <a href="#" class="text-blue-500 hover:underline mb-4 block text-sm">Learn More</a>
                <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">Shop Now</button>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Card