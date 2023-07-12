import Link from 'next/link'
import React from 'react'

function ModelX() {
  return (
    <div className=' h-[100vh]  bg-[url("/Model-X.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='flex flex-col items-center mt-32 '>
            <h1 className=' font-semibold text-4xl'>Model X</h1>
            <Link  href='/' className='text-sm underline'>Explore Inventory </Link>
        </div>
        <div className='mb-16'>
        <Link  href='/' className=' bg-white font-bold text-slate-800 px-6 py-2 rounded-lg mr-3'>Custom Order </Link>
        <Link  href='/' className={`  bg-black text-white font-bold  px-6 py-2 rounded-lg mr-3 `}>Demo Drive</Link>
        </div>

    </div>
  )
}

export default ModelX