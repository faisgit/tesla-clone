import React from "react";
import Link from "next/link";
function ModelXSpec() {
  return (
    <div className='text-black/80 h-[100vh]  bg-[url("/Model-X/tesla-model-x.jpg")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center  '>
      <div className="flex flex-col items-center mt-32 ">
        <h1 className=" font-semibold text-4xl">Model X</h1>
        <Link href="/" className="text-sm underline">
          Explore Inventory{" "}
        </Link>
      </div>
      <div className="flex flex-col ">
        <ul className="flex  justify-between items-center">
          <li className="flex flex-col justify-center items-center  ">
            <h1 className="  md:text-3xl  font-bold">333 mi</h1>
            <h6 className="text-xs">Range (EPA est.)</h6>
          </li>
          <li className="flex flex-col justify-center items-center">
            <h1 className="md:text-3xl font-bold">2.5 s</h1>
            <h6 className="text-xs">
              0-60mph<sup>*</sup>
            </h6>
          </li>
          <li className="flex flex-col justify-center items-center">
            <h1 className="md:text-3xl font-bold">9.9 s</h1>
            <h6 className="text-xs">1/4 Mile</h6>
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
        <h6 className="text-sm text-center mt-3 mb-4" >Specs displayed are Model X Plaid values.</h6>
      </div>
    </div>
  );
}

export default ModelXSpec;
