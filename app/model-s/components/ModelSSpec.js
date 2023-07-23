import React from "react";
import Link from "next/link";
function ModelSSpec() {
  return (
    <div className='text-white  h-[100vh]  bg-[url("/Home/Model-S.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
      <div className="flex flex-col items-center mt-32 ">
        <h1 className=" font-semibold text-4xl">Model S</h1>
        <Link href="/" className="text-sm underline">
          Explore Inventory{" "}
        </Link>
      </div>
      <div className="flex flex-col ">
        <ul className="flex  justify-between items-center">
          <li className="flex flex-col justify-center items-center  ">
            <h1 className="  md:text-3xl  font-bold">396 mi</h1>
            <h6 className="text-xs">Range (EPA est.)</h6>
          </li>
          <li className="flex flex-col justify-center items-center">
            <h1 className="md:text-3xl font-bold">1.99 s</h1>
            <h6 className="text-xs">
              0-60mph<sup>*</sup>
            </h6>
          </li>
          <li className="flex flex-col justify-center items-center">
            <h1 className="md:text-3xl font-bold">200 mph</h1>
            <h6 className="text-xs">
              Top Speed<sup>+</sup>
            </h6>
          </li>
          <li className=" hidden md:flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">1,020 hp</h1>
            <h6 className="text-xs">Peak Power</h6>
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
        <h6 className="text-sm text-center mt-3" >Specs displayed are Model S Plaid values.</h6>
      </div>
    </div>
  );
}

export default ModelSSpec;
