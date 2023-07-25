"use client";
import React from 'react'
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
    <div
      className="h-96 bg-black text-white"
      
    >
        <h1 
        className='font-bold text-3xl text-center mt-5'
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[fade-in-up_1s_ease-in-out]"
    >Interior of the Future</h1>
       
    </div>
  )
}

export default ModelSInterior