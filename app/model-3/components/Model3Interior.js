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

      <div className="flex flex-col justify-between">
        <div className="flex flex-col  md:flex-row justify-between  md:items-center md:px-10 lg:px-14  xl:px-44 text-white mb-6">
          <div className="relative h-[15rem] sm:h-[20rem] w-[screen] md:h-56 lg:h-64 md:w-96 lg:w-[30rem] mb-3">
            <Image
              src={"/Model-3/Model-3-Interior-Grid-1-Desktop-Global.avif"}
              alt="Image not found"
              fill
            />
          </div>
          <div className="w-96 pl-3 md:pl-4">
            <h1 className=" font-semibold text-3xl ">Glass Roof</h1>
            <p className="font-medium">
              The expansive Glass Roof in Model 3 provides passengers with a
              brighter, more spacious experience—and a seamless view of the sky.
            </p>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row justify-between  md:items-center md:px-10 lg:px-14  xl:px-44 text-white mb-6">
          <div className="relative h-[15rem] sm:h-[20rem] w-[screen] md:h-56 lg:h-64 md:w-96 lg:w-[30rem] mb-3">
            <Image
              src={"/Model-3/Model-3-Interior-Gallery-Weather-Desktop-LHD.avif"}
              alt="Image not found"
              fill
            />
          </div>
          <div className="w-96 pl-3 md:pl-4">
            <h1 className=" font-semibold text-3xl ">All-Weather Comfort</h1>
            <p className="font-medium">
              All-weather comfort system visualization of Model 3 All-Weather
              Comfort Enhance comfort and convenience with heated seats, side
              mirrors and steering wheel.
            </p>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row justify-between  md:items-center md:px-10 lg:px-14  xl:px-44 text-white mb-6">
          <div className="relative h-[15rem] sm:h-[20rem] w-[screen] md:h-56 lg:h-64 md:w-96 lg:w-[30rem] mb-3">
            <Image
              src={"/Model-3/Model-3-Interior-Gallery-Sound-Desktop-LHD.avif"}
              alt="Image not found"
              fill
            />
          </div>
          <div className="w-96 pl-3 md:pl-4">
            <h1 className=" font-semibold text-3xl ">Sublime Sound</h1>
            <p className=" font-medium">
              Our premium audio system features 14 speakers, including a
              subwoofer and dual amplifiers, for interior sound dynamics
              comparable to a recording studio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model3Interior;
