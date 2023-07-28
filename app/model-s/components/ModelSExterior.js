"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
function ModelSExterior() {
  useEffect(() => {
    const init = async () => {
      const { Animate, initTE } = await import("tw-elements");
      initTE({ Animate });
    };
    init();
  }, []);
  return (
    <div className="bg-black text-white">
      <div
        data-te-animation-init
        data-te-animation-start="onScrollDown"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[fade-in-up_1s_ease-in-out]"
      >
        <h1 className="font-bold text-3xl text-center pt-7 text-white">
          Exterior of the Future
        </h1>
      </div>
      <div className="h-[90vh] relative z-1 pt-10 ">
        <Image src="/Model-S/Model-S-Exterior-Hero-Desktop-Global.avif" fill />
      </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center mx-10 ">
            <div className="flex flex-col">
                <h3 className="font-semibold text-lg text-center lg:text-start ">Exterior</h3>
                <h1 className="font-semibold text-2xl ">Desigined For Efficiency</h1>
                <div className="flex flex-col mt-4 items-start">
                    <Link href={'/'} className="   mb-4 border-2 border-solid border-white px-10 py-1 hover:bg-white hover:text-black duration-700 font-semibold " >Order Now</Link>
                    <Link href={'/'} className=" bg-slate-700 px-7 py-2  font-semibold ">View Inventory</Link>
                </div>
            </div>
            <div className="   md:w-[48rem]">
                <p className="w-80 md:w-auto">With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
            </div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 gap-y-14 mx-0 lg:mx-12 xl:mx-28 mt-20 items-center">
        <div
          className="relative z-1 h-[30vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image src="/Model-S/MS-Interior-Grid-A-Desktop.avif" alt="" fill />
        </div>
        <div
          className="w-80 mx-3 md:w-screen lg:w-auto md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start  md:mx-4 lg:mx-0 "
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <h3 className="font-semibold">Stay Connected</h3>
          <p className="text-sm md:w-80">
            Instantly connect with multi-device Bluetooth, or fast charge
            devices with wireless and 36-watt USB-C charging.
          </p>
        </div>

        <div
          className="w-80 mx-3 md:w-screen lg:w-auto md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start  md:mx-4 lg:mx-0 "
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <h3 className="font-semibold">Room for Everything</h3>
          <p className="text-sm md:w-80">
            With front and rear trunks and fold-flat seats you can fit your bike
            without taking the wheel off—and your luggage too.{" "}
            <Link href="/" className="font-semibold underline">
              Compare Models
            </Link>
          </p>
        </div>

        <div
          className="relative z-1 h-[30vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image src="/Model-S/MS-Interior-Grid-D-Desktop.avif" alt="" fill />
        </div>
      </div>
    </div>
  );
}

export default ModelSExterior;
