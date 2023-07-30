import React from "react";
import Image from "next/image";
import Link from "next/link";
function ModelSExterior() {
  return (
    <div className="bg-black text-white pb-6">
      <div
        data-te-animation-init
        data-te-animation-start="onScroll"
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
          <h1 className="font-semibold text-2xl ">Desigined For Efficiency</h1>
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
            With a drag coefficient of just .208 Cd, the lowest on the planet,
            Model S is built for speed, endurance and range. Improved
            aerodynamics and a wider chassis offer more responsive performance
            so you can take corners quicker and with more confidence.
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
          className="relative z-1 h-[30vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image
            src="/Model-S/Model-S-Exterior-Grid-A-Desktop-Global.avif"
            alt=""
            fill
          />
        </div>

        <div
          className="relative z-1 h-[30vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image
            src="/Model-S/Model-S-Exterior-Grid-B-Desktop-Global.avif"
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
            Attention to detail on all exterior surfaces makes Model S the most
            aerodynamic production car on Earth.
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
          className="relative z-1 h-[30vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image
            src="/Model-S/Model-S-Exterior-Grid-C-Desktop-Global.avif"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default ModelSExterior;
