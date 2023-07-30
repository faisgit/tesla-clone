import React from "react";
import Link from "next/link";
function ModelSFooter() {
  return (
    <div className="flex flex-col justify-between items-center text-black/75 bg-white py-5 ">

      <p className="text-sm text-center mb-10">
        Certain high data usage vehicle features require at least Standard
        Connectivity, including maps, navigation <br /> and voice commands.
        Access to features that use cellular data and third-party licenses are
        subject to <br /> change. <Link href={'/'} className="font-semibold underline"> Learn more about Standard Connectivity and any
        limitations.</Link>
      </p>
     <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 text-xs font-semibold">
        <Link href="/"  className="">Tesla © 2023</Link>
        <Link href="/"  className="">Privacy & Legal</Link>
        <Link href="/"  className="">Vehicle Recalls</Link>
        <Link href={"/"} className="">Contact</Link>
        <Link href={"/"} className="">News</Link>
        <Link href={"/"} className="">Get Updates</Link>
        <Link href={"/"} className="">Locations</Link>
      </div>
    </div>
  );
}

export default ModelSFooter;
