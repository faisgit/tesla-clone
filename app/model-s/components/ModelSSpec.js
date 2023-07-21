import React from "react";
import Link from "next/link";
function ModelSSpec() {
  return (
    <div className='  h-[100vh]   bg-[url("/Home/Model-S.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center text-white '>
      <div className="flex flex-col items-center mt-24 ">
        <h1 className=" font-semibold text-4xl">Model S</h1>
        <Link href="/" className="text-sm underline">
          Explore Inventory{" "}
        </Link>
      </div>

      <div className="flex flex-col mb-1   ">
        <div className=" bg-transparent stats stats-vertical lg:stats-horizontal text-white mb-4 ">
          <div className="stat">
            <div className="stat-value">396 mi</div>
            <div className="stat-desc text-white text-center">
              Range (EPA est.)
            </div>
          </div>
          <div className="stat">
            <div className="stat-value">1.99s</div>
            <div className="stat-desc text-white text-center">
              0-60mph<sup>*</sup>
            </div>
          </div>
          <div className="stat">
            <div className="stat-value">200mph</div>
            <div className="stat-desc text-white text-center">
              Total Speed<sup>+</sup>
            </div>
          </div>
          <div className="stat">
            <div className="stat-value">1,020 hp</div>
            <div className="stat-desc text-white text-center">
              Peak Power
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center mb-3">
          <Link
            href="/"
            className={`  bg-white text-black font-semibold  px-[4.5rem] py-2 mb-3 md:mb-0 mr-3 opacity-50 hover:opacity-100 duration-700 `}
          >
            Order Now
          </Link>
          <Link
            href="/"
            className=" bg-black font-semibold text-white px-[5.3rem] py-2  mr-3  opacity-50 hover:opacity-100 duration-700"
          >
            Demo Drive{" "}
          </Link>
        </div>
        <div className="">
            <h5 className="text-center text-sm">Specs displayed are Model S Plaid values.</h5>
        </div>
      </div>
    </div>
  );
}

export default ModelSSpec;
