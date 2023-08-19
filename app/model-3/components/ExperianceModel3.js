import React from "react";
import Link from "next/link";
import Image from "next/image"
function ExperianceModel3() {
  return (
    <div className="bg-black text-black/80 flex flex-col lg:flex-row justify-between items-center border-none text-white">
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
        <Image src='/Model-3/Model-3Order-Desktop-Mobile-Global.avif' fill />
      </div>
    </div>
  );
}

export default ExperianceModel3;
