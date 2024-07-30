import React from 'react'
import Logo from "/photos/micro-logo.png"
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsFileArrowDown } from "react-icons/bs"

function Nav() {
  return (
    <div>

<header className="w-screen bg-white h-14 border flex justify-center items-center md:justify-center gap-5 md:gap-10">

    <div id="menubar" className="py-6 md:hidden"><IoIosMenu/></div>
   <div className='md:order-2 flex'>
   <div className="hidden md:block md:order-1 pr-32">
        <ul className="flex justify-around items-center gap-5">
            <li><a href="" className="capitalized">microsoft365</a></li>
            <li><a href="teams" className="capitalized">teams</a></li>
            <li><a href="capilot" className="capitalized">capilot</a></li>
            <li><a href="windows" className="capitalized">windows</a></li>
            <li><a href="surface" className="capitalized">surface</a></li>
            <li><a href="xbox" className="capitalized">xbox</a></li>
            <li><a href="support" className="capitalized">support</a></li>
        </ul>
    </div>

    <div id="" className=" md:order-2 md:flex hidden md:block">all microsoft <BsFileArrowDown/></div>
   </div>
    <div id="search" className="py-6 md:order-4"><CiSearch/></div>
    <div id="logo" className="py-6 md:order-1"><img src={Logo} className="w-24"/></div>
     <div id="trally" className="py-6 md:order-4"><MdOutlineShoppingCart/></div>
     <div id="profile" className="py-6bg-white border rounded-full size-8 flex items-center justify-center pl-1 md:order-5"><FaRegUser/></div>
  </header>
    </div>
  )
}

export default Nav