"use client";
import React, { useState } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ModelSNav() {
  const [display, setDisplay] = useState("hidden")
 
  return (
    <div>
      <nav className={` ${display} lg:flex  justify-center lg:justify-between items-center px-4 absolute  top-64 lg:top-16 w-[100vw]  bg-black lg:bg-black/70 text-white py-3 lg:py-0 `}>
        <div>
          <Link href="/model-s" className="font-bold hidden lg:block">Model S</Link>
        </div>
        <div className={`  py-4 `} >
          <ul className="flex flex-col lg:flex-row  items-center  ">
            <li className="mx-5">View Inventory</li>
            <li className="mx-5">Demo Drive</li>
            <li className="mx-5">Compare</li>
            <li className="mx-5 bg-slate-700 px-4 py-2 rounded-md ">Order Model S</li>
          </ul>
        </div>
      </nav>
        <div className="fixed block lg:hidden bg-red-700  right-1 top-[470px] text-black">
          <Link href='/'>Model S</Link>
          <br />
          <button onClick={() => {
                if (display == "hidden") {
                  setDisplay("flex");
                  setbtn('Close')
                }
                else{
                  setDisplay("hidden")
                 
                }
              }
          }>
            <KeyboardArrowDownIcon className={`${display}`} />
            <KeyboardArrowUpIcon />
          </button>
        </div>
    </div>
  );
}

export default ModelSNav;
