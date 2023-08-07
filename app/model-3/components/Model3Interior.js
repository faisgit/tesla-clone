"use client";
import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import Link from "next/link";
import Image from "next/image";
function Model3Interior() {
  return (
    <div className="bg-black">
      <div
        className={` h-96 md:h-[40rem] lg:h-screen bg-[url('/Model-3/Model-3-Interior-Hero-Desktop-LHD.avif')] bg-center bg-cover text-white flex lg:flex-col justify-between items-end  `}
      >
        <div
          className="mb-10 lg:mb-0 mt-16 lg:mr-10 ml-4
         md:ml-14 flex flex-col items-center lg:items-start "
        >
          <WifiIcon />
          <p className="text-center lg:text-left text-sm md:text-base ">
            Over-the-air Updates
          </p>
        </div>
        <div className="mb-10 lg:mb-0 lg:mr-10 flex flex-col items-center lg:items-start">
          <h5 className="font-bold md:text-2xl text-lg">15 Inch</h5>
          <p className="text-center lg:text-left text-sm md:text-base">
            Touchscreen Display
          </p>
        </div>
        <div className="mb-10 lg:mb-16 mr-6 md:mr-14 lg:mr-20 flex flex-col items-center lg:items-start">
          <TimeToLeaveIcon />
          <p className="text-center lg:text-left text-sm md:text-base">
            All-Glass Roof
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between py-10 px-5 sm:px-7 md:px-12 lg:px-28 text-white md:items-start lg:items-center  ">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-32 sm:mb-20 lg:mb-3">
            Built Around the Driver
          </h1>
          <Link
            href={"/"}
            className="bg-transparent border-2 border-solid border-white px-7 py-2 hover:bg-white hover:text-black duration-700"
          >
            View Inventory{" "}
          </Link>
        </div>
        <p className="relative bottom-36 sm:bottom-24 lg:bottom-auto ">
          The inside of Model 3 is unlike any other vehicle with unrivaled
          technology, premium materials and plenty of legroom.
        </p>
      </div>

      <div>
        <div>
          <div className="relative h-64 w-96">
            <Image
              src={"/Model-3/Model-3-Interior-Grid-1-Desktop-Global.avif"}
              alt="Image not found"
              fill
            />
          </div>
          <div>
            <h1>Glass Roof</h1>
            <p>The expansive Glass Roof in Model 3 provides passengers with a brighter, more spacious experience—and a seamless view of the sky.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model3Interior;
