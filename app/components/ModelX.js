import Link from 'next/link'
import React from 'react'

function ModelX() {
  return (
    <div className=' text-white w-[100vw]  bg-[url("/Home/Model-X.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='flex flex-col items-center mt-32 '>
            <h1 className=' font-semibold text-4xl'>Model X</h1>
            <Link  href='/' className='text-sm underline'>Explore Inventory </Link>
        </div>
        <div className='mb-16 flex flex-col md:flex-row justify-center items-center'>
        <Link  href='/' className={`  bg-white text-black font-semibold  px-[4.5rem] py-2 mb-3 md:mb-0 mr-3 opacity-50 hover:opacity-100 duration-700 `}>Custom Order</Link>
        <Link  href='/' className=' bg-black font-semibold text-white px-[5.3rem] py-2  mr-3  opacity-50 hover:opacity-100 duration-700'>Demo Drive </Link>
        </div>


    </div>
  )
}

export default ModelX