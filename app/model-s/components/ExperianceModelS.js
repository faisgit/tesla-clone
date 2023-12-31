'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
function ExperianceModelS() {
  useEffect(() => {
    const init = async () => {
      const { Animate, initTE } = await import("tw-elements");
      initTE({ Animate });
    };
    init();
  }, []);
  return (
    <div className="bg-white text-black/80 flex flex-col lg:flex-row justify-between items-center border-none">
      <div className=" py-14 px-4 flex flex-col ">
        <h1 className=" font-medium text-3xl">Experience Model S</h1>
        <p className="mt-2 mb-5" >
          Design yours or request a callback from Tesla Advisor to learn more
        </p>
        <div data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[fade-in-up_1s_ease-in-out]">
          <Link
            href=""
            className="border-2 border-solid border-black px-8 py-2 rounded-lg hover:bg-black hover:text-white duration-700 mr-4"
          >
            Order Now
          </Link>
          <Link
            href=""
            className=" bg-gray-600 text-white px-4 py-2 rounded-lg "
          >
            Request a Callback
          </Link>
        </div>
      </div>
      <div className="relative h-80 w-screen lg:w-[35.5rem]" >
        <Image src='/Model-S/Model-S-Order-Hero-Desktop-Mobile-LHD.avif' alt="Image Not Found" fill />
      </div>
    </div>
  );
}

export default ExperianceModelS;
