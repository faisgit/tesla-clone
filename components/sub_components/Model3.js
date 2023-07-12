import React from 'react'
import Link from 'next/link'
function Model3() {
  return (
    <div className=' h-[100vh]  bg-[url("/Model-3.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='flex flex-col items-center mt-32 '>
            <h1 className=' font-semibold text-4xl'>Model 3</h1>
            <div className='flex flex-col justify-center items-center mt-3'>
            <h2  className=''>Starting at $32,740</h2>
            <h2>After Federal Tax Credit</h2>
            </div>
        </div>
        <div className='mb-16'>
        <Link  href='/' className={`  bg-white text-black font-semibold  px-6 py-2 rounded-lg mr-3 `}>Explore Inventory</Link>
        <Link  href='/' className=' bg-black font-semibold text-white px-6 py-2 rounded-lg mr-3'>Custom Order </Link>
        </div>

    </div>
  )
}

export default Model3