"use client";
import React from "react";
import Image from "next/image";
import WifiIcon from "@mui/icons-material/Wifi";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
function Model3Interior() {
  return (
    <div>
      <div className="relative h-56 md:h-96   lg:h-screen">
        <Image
          src="/Model-3/Model-3-Interior-Hero-Desktop-LHD.avif"
          alt="Image not found !"
          fill
        />
      </div>
      <div className=" flex flex-col justify-between text-black ">
        <div className="">
          <WifiIcon />
          <p>Over-the-air Updates</p>
        </div>
        <div className="">
          <h6>15 inch</h6>
          <p>Touchscreen Display</p>
        </div>
        <div className="">
          <DirectionsCarIcon />
          <p>All-Glass Roof </p>
        </div>
      </div>
    </div>
  );
}

export default Model3Interior;
