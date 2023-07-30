import React from "react";
import Link from "next/link";
import Image from "next/image"
function ExperianceModelS() {
  return (
    <div className="bg-white text-black/80 flex flex-col lg:flex-row justify-between items-center">
      <div className=" py-14 px-4 flex flex-col ">
        <h1 className=" font-medium text-3xl">Experience Model S</h1>
        <p className="my-2">
          Design yours or request a callback from Tesla Advisor to learn more
        </p>
        <div>
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
        <Image src='/Model-S/Model-S-Order-Hero-Desktop-Mobile-LHD.avif' fill />
      </div>
    </div>
  );
}

export default ExperianceModelS;
