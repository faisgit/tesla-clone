"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/Home/tesla-logo.png";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter()
  const [display, setDisplay] = useState("hidden");
  const [position, setPosition] = useState("")

  return (
    <div className=" font-semibold text-white">
      <nav className="flex justify-between items-center   px-6 py-3 bg-black/75 fixed w-[100vw] top-0  z-[4] ">
        <div className=" w-[118px] h-[16px] relative  ">
          <Link href="/" className=''>
            <Image src={logo} alt="User Image" fill className=' invert-[1]' />
          </Link>
        </div>
        <div className=" ml-9">
          <ul className=" hidden xl:flex justify-between items-center  ">
            <li className="mx-3"><Link href='/model-s' className =' px-2 py-2 '>Model S </Link> </li>
            <li className="mx-3"><Link href='/model-3' className =' px-2 py-2 '>Model 3 </Link></li>
            <li className="mx-3"><Link href='/' className =' px-2 py-2 ' >Model X </Link></li>
            <li className="mx-3"><Link href='/' className =' px-2 py-2 ' >Model Y</Link></li>
            <li className="mx-3"><Link href='/' className =' px-2 py-2 ' >Solar Roof</Link></li>
            <li className="mx-3"><Link href='/' className =' px-2 py-2 ' >Solar Panels </Link></li>
            <li className="mx-3"><Link href='/' className =' px-2 py-2 ' >PowerWall</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center">
            <li className="mx-3 hidden xl:block"> <Link href='/' className =' px-2 py-2' >Shop</Link></li>
            <li className="mx-3 hidden xl:block"> <Link href='/' className =' px-2 py-2' >Account</Link></li>
            <li
              className="mx-3 cursor-pointer px-2 py-2"
              onClick={() => {
                if (display == "hidden") {
                  setDisplay("block");
                  setPosition("fixed")
                }
              }}
            >
              Menu
            </li>
          </ul>
        </div>
        <div
          className={` absolute top-0 right-0 bg-white text-black h-[100vh]  transition-all ease-in-out duration-700 
            before:content-[''] before:absolute before:h-full before:w-[100vw] ${display} before:bg-black before:opacity-[0.5] before:z-[-1] before:right-[300px] before:top-[0]  shadow-inner `}
        >
          <div className="flex justify-end px-4  my-6">
            <CloseIcon
              className=" cursor-pointer  hover:bg-white hover:text-black rounded-lg "
              onClick={() => {
                if (display == "block") {
                  setDisplay("hidden");
                }
              }}
            />
          </div>

          <ul className=" px-16 overflow-y-auto h-[90vh] py-10">
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Model S{" "}
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Model 3
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Model X{" "}
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Model Y
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Solar Roof
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Solar Panels{" "}
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              PowerWall
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Shop
            </li>
            <li className="block xl:hidden  px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Account
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Existing Inventory{" "}
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Used Inventory{" "}
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Trade In
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Demo Drive
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Insurance
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Fleet
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Cybertruck
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Roadster
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Semi
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Charging
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Roadster
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Semi
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Charging
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Commercial Energy
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Utilities
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Carrers
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Find Us{" "}
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Events
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Support
            </li>
            <li className=" px-2 py-2  hover:bg-white hover:text-black transition-all ease-in-out duration-700 rounded-lg">
              Investor Relations{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
