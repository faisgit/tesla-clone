"use client";
import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
function ModelXExterior() {
  useEffect(() => {
    const init = async () => {
      const { Animate, initTE } = await import("tw-elements");
      initTE({ Animate });
    };
    init();
  }, []);
  return (
    <div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col justify-between items-center bg-white text-black   xl:w-[40rem]">
          <div className="px-8 pt-8">
            <h3 className="font-semibold text-2xl">Utility</h3>
            <h1 className="font-bold text-3xl mb-4">Even More Capable</h1>
            <p className="text-black/40">
              With ample storage and 5,000 lbs of towing capacity, Model X is
              built for maximum utility. Front doors open and close
              automatically, Falcon Wing rear doors allow for easier loading and
              a trailer hitch comes standard, so you can bring your gear with
              you wherever you go.
            </p>
          </div>

          <div
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
            className="flex flex-col items-center mb-4"
          >
            <Link
              href="/"
              className=" border-2  border-solid border-black px-24 py-2 font-bold hover:bg-black hover:text-white duration-700 mb-2"
            >
              Order Now
            </Link>
            <Link href={"/"} className="bg-black/10 px-20 py-2">
              Compare Models
            </Link>
          </div>
        </div>
        <div
          className={`  bg-[url('/Model-X/Model-X-Utility-Hero-Desktop-LHD.avif')] h-96 md:h-[70vh] xl:h-screen w-full md:w-full bg-no-repeat bg-center bg-cover`}
        >
          <ul
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
            className="  flex justify-between items-end text-white  h-96 md:h-[70vh] xl:h-screen pb-6 "
          >
            <li className="flex flex-col items-center ml-3 md:ml-8 ">
              <h2 className="font-bold text-2xl">
                92 ft<sup>3</sup>
              </h2>
              <p className="text-xs">
                Up to 92 ft<sup>3</sup> of storage
              </p>
            </li>
            <li className="flex flex-col items-center  ">
              <h4 className="font-bold text-2xl">5,000 lbs</h4>
              <p className="text-xs">Tow up to 5,000 lbs</p>
            </li>
            <li className="flex flex-col items-center mr-3 md:mr-8 ">
              <TimeToLeaveIcon className="font-bold text-2xl" />
              <p className="text-xs">Falcon wings Doors</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative  h-80 md:h-screen w-full ">
        <Image
          src={`/Model-X/Model-X-Exterior-Hero-Desktop-Global.avif`}
          alt="Image not found"
          fill
          className=""
        />
      </div>

      <div className="bg-black text-white pb-6">
        <div
          className="flex flex-col lg:flex-row justify-between items-center mx-10 "
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="font-semibold text-lg text-center lg:text-start ">
              Exterior
            </h3>
            <h1 className="font-semibold text-2xl ">
              Desigined For Efficiency
            </h1>
            <div className="flex flex-col mt-4 items-center lg:items-start">
              <Link
                href={"/"}
                className="   mb-4 border-2 border-solid border-white px-10 py-1 hover:bg-white hover:text-black duration-700 font-semibold "
              >
                Order Now
              </Link>
              <Link
                href={"/"}
                className=" bg-slate-700 px-7 py-2  font-semibold "
              >
                View Inventory
              </Link>
            </div>
          </div>
          <div className="    lg:mt-0 lg:w-[48rem]">
            <p className="w-80 md:w-auto">
            Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 gap-y-14 mx-0 lg:mx-12 xl:mx-28 mt-20 items-center">
          <div
            className="w-80 mx-3 md:w-screen lg:w-auto md:flex sm:flex-col sm:justify-center lg:justify-start md:items-center lg:items-start  md:mx-4 lg:mx-0 "
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
          >
            <h3 className="font-semibold">Relentless Performance</h3>
            <p className="text-sm md:w-80">
              Staggered, performance wheels and tires keep the car planted and
              help transfer maximum power down to the road.
            </p>
          </div>
          <div
            className="relative z-1 h-[28vh] sm:h-[40vh] lg:w-[29rem]"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
          >
            <Image
              src="/Model-X/Model-X-Exterior-Grid-A-Desktop-Mobile-Global.avif"
              alt=""
              fill
            />
          </div>

          <div
            className="relative z-1 h-[28vh] sm:h-[40vh] lg:w-[29rem]"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
          >
            <Image
              src="/Model-X/Model-X-Exterior-Grid-B-Desktop-Mobile-Global.avif"
              alt=""
              fill
            />
          </div>

          <div
            className="w-80 mx-3 md:w-screen lg:w-auto md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start  md:mx-4 lg:mx-0 "
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
          >
            <h3 className="font-semibold">Optimized Aerodynamics</h3>
            <p className="text-sm md:w-80">
              Attention to detail on all exterior surfaces makes Model S the
              most aerodynamic production car on Earth.
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
            <h3 className="font-semibold">Refined Styling</h3>
            <p className="text-sm md:w-80">
              An iconic silhouette meets refreshed, elegant proportions.
            </p>
          </div>
          <div
            className="relative z-1 h-[28vh] sm:h-[40vh] lg:w-[29rem]"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
          >
            <Image
              src="/Model-X/Model-X-Exterior-Grid-C-Desktop_Mobile-LHD.avif"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelXExterior;
