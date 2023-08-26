'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
function ModelSInterior() {
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
        className=" h-screen relative z-1 pt-10 "
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

export default ModelSInterior;
