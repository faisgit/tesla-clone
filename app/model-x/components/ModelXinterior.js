"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
function ModelXInterior() {
    useEffect(() => {
        const init = async () => {
          const { Animate, initTE } = await import("tw-elements");
          initTE({ Animate });
        };
        init();
      }, []);
  return (
    <div className=" -mt-[18] bg-black text-white">
      <h1
        className="font-bold text-3xl text-center pt-7"
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[fade-in-up_1s_ease-in-out]"
      >
        Interior of the Future
      </h1>

      <div
        className=" h-[27rem] sm:h-screen relative z-1 pt-10 "
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[fade-in-up_1s_ease-in-out]"
      >
        <Image
          src="/Model-S/tesla-model-s-interior.avif"
          alt="User Image"
          fill
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 gap-y-14 mx-0 lg:mx-12 xl:mx-28 mt-20 items-center pb-7">
        <div
          className="relative z-1 h-[28vh] sm:h-[40vh] md:h-[50vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image src="/Model-X/MX-Interior-Grid-B-Desktop_LHD.avif" alt="" fill />
        </div>
        <div
          className="w-80  mx-3 md:w-auto  md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start  md:mx-4 lg:mx-0 "
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
          className="w-80 mx-3 md:w-auto md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start  md:mx-4 lg:mx-0 "
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <h3 className="font-semibold">Sublime Sound</h3>
          <p className="text-sm md:w-80">
          A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.
          </p>
        </div>

        <div
          className="relative z-1  h-[28vh] sm:h-[40vh] md:h-[50vh] lg:h-72 lg:w-[29rem]"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-reset="true"
          data-te-animation="[fade-in-up_1s_ease-in-out]"
        >
          <Image src="/Model-X/MX-Interior-Grid_C-Desktop.avif" alt="" fill />
        </div>
      </div>
    </div>
  );
}

export default ModelXInterior;
