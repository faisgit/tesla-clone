import React from "react";
import Link from "next/link";
function Model3Spec() {
  return (
    <div className={`text-white  h-[100vh]  bg-[url("/Model-3/Model-3-Hero-Desktop-Home.jpg")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center `} >
      <div className="flex flex-col items-center mt-32 ">
        <h1 className=" font-semibold text-4xl">Model 3</h1>
        <Link href="/" className="text-sm underline">
          Explore Inventory{" "}
        </Link>
      </div>
      <div className="flex flex-col ">
        <ul className="flex justify-between md:justify-normal  items-center">
          <li className="flex flex-col justify-center items-center md:mx-10  ">
            <h1 className="  md:text-3xl  font-bold">3.1s</h1>
            <h6 className="text-xs">0-60 mph*</h6>
          </li>
          <li className="flex flex-col justify-center items-center md:mx-10">
            <h1 className="md:text-3xl font-bold">333 mi</h1>
            <h6 className="text-xs">
            Range (EPA est.)
            </h6>
          </li>
          <li className="flex flex-col justify-center items-center md:mx-10">
            <h1 className="md:text-3xl font-bold">$32,740†</h1>
            <h6 className="text-xs">
            After Tax Credit
            </h6>
          </li>
        </ul>

        <div className=" flex flex-col md:flex-row justify-center items-center mt-4">
          <Link
            href="/"
            className={`  bg-white text-black/70 font-semibold  px-[5.7rem] py-2 mb-3 md:mb-0 mr-3  hover:opacity-100 duration-700 `}
          >
            Order Now
          </Link>
          <Link
            href="/"
            className=" bg-transperent  border-2 border-solid border-white font-semibold text-white px-[5.3rem] py-2  mr-3   hover:bg-white hover:text-black/70 duration-700"
          >
            Demo Drive{" "}
          </Link>
        </div>
        <h6 className="text-xs text-center mt-3" >†Starting pre-tax price for Model 3 RWD after federal tax credit. <Link href={'/'} className="underline text-white/90 hover:text-white/100 duration-700"> Review Eligibility </Link></h6>
      </div>
    </div>
  );
}

export default Model3Spec;
