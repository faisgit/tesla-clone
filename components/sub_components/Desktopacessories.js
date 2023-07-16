import Link from 'next/link'
import React from 'react'

function Desktopacessories() {
  return (
    <div className=' w-[100vw]  bg-[url("/Desktop-Accessories.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='flex flex-col items-center mt-32 '>
            <h1 className=' font-semibold text-4xl'>Accessories</h1>
        </div>
        <div className='mb-16 '>
  
        <Link  href='/' className=' bg-black font-semibold text-white px-[5.3rem] py-2  mr-3  opacity-50 hover:opacity-100 duration-700'>Shop Now</Link>
        </div>
    

    </div>
  )
}

export default Desktopacessories