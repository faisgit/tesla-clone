import React from "react";
import Link from "next/link";
function ModelSNav() {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 fixed w-[100vw] top-16 bg-black/40 text-white py-3 ">
        <div>
          <Link href="/model-s" className="font-bold">Model S</Link>
        </div>
        <div >
          <ul className="flex items-center  font-semibold text-sm">
            <li className="mx-5">View Inventory</li>
            <li className="mx-5">Demo Drive</li>
            <li className="mx-5">Compare</li>
            <li className="mx-5 bg-slate-700 px-4 py-2 rounded-md ">Order Model S</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ModelSNav;
