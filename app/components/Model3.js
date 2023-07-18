import React from 'react'
import Link from 'next/link'
function Model3() {
  return (
    <div className=' w-[100vw]  bg-[url("/Home/Model-3.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center carousel-item '>
        <div className='flex flex-col items-center mt-32 '>
            <h1 className=' font-semibold text-4xl'>Model 3</h1>
            <div className='flex flex-col justify-center items-center mt-3'>
            <h2  className=''>Starting at $32,740</h2>
            <h2>After Federal Tax Credit</h2>
            </div>
        </div>
        <div className='mb-16 flex flex-col md:flex-row justify-center items-center relative z-[1]'>
        <Link  href='/' className={`  bg-white text-black font-semibold  px-[4.5rem] py-2 mb-3 md:mb-0 mr-3 opacity-50 hover:opacity-100 duration-700 `}>Explore Inventory</Link>
        <Link  href='/' className=' bg-black font-semibold text-white px-[5.3rem] py-2  mr-3  opacity-50 hover:opacity-100 duration-700'>Custom Order </Link>
        </div>

    </div>
  )
}

export default Model3