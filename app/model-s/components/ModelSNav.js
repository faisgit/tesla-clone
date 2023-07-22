"use client";
import React from "react";
import Link from "next/link";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
function ModelSNav() {
  const [display, setDisplay] = useState("hidden");
  return (
    <div>
      <nav className=" hidden md:flex justify-between items-center fixed top-16 w-screen bg-black/50 text-white py-2 px-2">
        <Link href="/model-s" className=" font-bold">
          Model S
        </Link>
        <ul className="flex justify-center  items-center text-sm font-semibold">
          <li className="mx-4">View Inventory</li>
          <li className="mx-4">Demo Drive</li>
          <li className="mx-4">Compare</li>
          <li className="mx-4  bg-slate-600 px-3 py-2 rounded-lg text-bold">
            Order Model S{" "}
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <div className={` ${display} fixed bottom-0 w-screen bg-white text-black py-3 z-10`}>
          <ul className="  flex flex-col justify-center items-center ">
            <li className="py-2">Oder Model S</li>
            <li className="py-2">Veiw Inventory</li>
            <li className="py-2">Demo Drive</li>
            <li className="py-2">Compare</li>
          </ul>
          <button
            className="fixed right-2 bottom-3 bg-slate-600 text-white px-3 py-2 rounded-lg "
          onClick={() => {
            if (display == "block") {
              setDisplay("hidden");
            }
          }}
            >
            <ExpandMoreIcon />
          </button>
        </div>
        <div className="fixed bottom-3 right-2 flex items-center ">
          <Link
            href="/"
            className="bg-slate-600 text-white px-3 py-2 rounded-lg mx-2 text-bold"
            >
            Order Model S
          </Link>
          <button
            className="bg-slate-600 text-white px-3 py-2 rounded-lg"
            onClick={() => {
              if (display == "hidden") {
                setDisplay("block");
              }
            }}
          >
            <ExpandLessIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModelSNav;
