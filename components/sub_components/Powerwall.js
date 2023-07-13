import Link from 'next/link'
import React from 'react'

function Powerwall() {
  return (
    <div className=' w-[100vw]  bg-[url("/Powerwall.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='mt-32 '>
            <h1 className=' font-semibold text-4xl text-center'>Powerwall</h1>
        </div>
        <div className='mb-16'>
        <Link  href='/' className=' bg-white font-bold text-slate-800 px-6 py-2 rounded-lg mr-3 opacity-50 hover:opacity-100 duration-700'>Order Now </Link>
        <Link  href='/' className={`  bg-black text-white font-bold  px-6 py-2 rounded-lg mr-3 opacity-50 hover:opacity-100 duration-700 `}>Learn More</Link>
        </div>

    </div>
  )
}

export default Powerwall