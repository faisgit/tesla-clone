"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/tesla-logo.png";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter()
  const [display, setDisplay] = useState("hidden");
  const [position, setPosition] = useState("")

  return (
    <div className=" font-bold">
      <nav className="flex justify-between items-center  py-3 px-6 bg-transperent fixed w-[100vw] top-24 md:top-3 text-black">
        <div className=" w-[118px] h-[150px] relative ">
          <Link href="/" className=''>
            <Image src={logo} alt="User Image" fill className="" />
          </Link>
        </div>
        <div>
          <ul className=" hidden xl:flex justify-between items-center">
            <li className="mx-3"><Link href='/about' className =' px-2 py-2 hover:bg-black/20 hover:backdrop-blur-lg'>Model S </Link> </li>
            <li className="mx-3"><Link href='/model-3'>Model 3 </Link></li>
            <li className="mx-3">Model X </li>
            <li className="mx-3">Model Y</li>
            <li className="mx-3">Solar Roof</li>
            <li className="mx-3">Solar Panels </li>
            <li className="mx-3">PowerWall</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center">
            <li className="mx-3 hidden xl:block">Shop</li>
            <li className="mx-3 hidden xl:block">Account</li>
            <li
              className="mx-3 cursor-pointer"
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
          className={`absolute top-0 right-0 bg-blue-400 text-white h-[199vh] xl:h-[140vh] ${display} transition-all ease-in-out duration-700  before:content-[''] before:absolute before:h-full before:w-[100vw]  before:bg-black before:opacity-[0.5] before:z-[-1] before:right-[200px] before:top-[0] shadow-inner `}
        >
          <div className="flex justify-end px-4 my-6">
            <CloseIcon
              className=" cursor-pointer  hover:bg-white hover:text-black rounded-lg "
              onClick={() => {
                if (display == "block") {
                  setDisplay("hidden");
                }
              }}
            />
          </div>

          <ul className=" px-16 pb-6 ">
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
