import Link from 'next/link'
import React from 'react'

function Powerwall() {
  return (
    <div className='text-white w-[100vw]  bg-[url("/Home/Powerwall.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='mt-32 '>
            <h1 className=' font-semibold text-4xl text-center'>Powerwall</h1>
        </div>
        <div className='mb-16 flex flex-col md:flex-row justify-center items-center'>
        <Link  href='/' className={`  bg-white text-black font-semibold px-[5.5rem] py-2 mb-3 md:mb-0 mr-3 opacity-50 hover:opacity-100 duration-700 `}>Order Now</Link>
        <Link  href='/' className=' bg-black font-semibold text-white px-[5.3rem] py-2  mr-3  opacity-50 hover:opacity-100 duration-700'>Learn More </Link>
        </div>
    </div>
  )
}

export default Powerwall