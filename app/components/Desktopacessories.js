import Link from 'next/link'
import React from 'react'

function Desktopacessories() {
  return (
    <div className=' w-[100vw]  bg-[url("/Home/Desktop-Accessories.avif")] bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center '>
        <div className='flex flex-col items-center mt-32 '>
            <h1 className=' font-semibold text-4xl'>Accessories</h1>
        </div>
        <div className=' flex flex-col justify-between items-center '>
  
        <Link  href='/' className=' bg-black font-semibold text-white px-[5.3rem] py-2  mr-3  opacity-50 hover:opacity-100 duration-700 '>Shop Now</Link>
        <div className=' bg-black/90 md:bg-transparent py-8 mt-7 w-[100vw] md:w-[100%]'>
          <ul className='flex justify-between items-center mb-0  text-white text-xs flex-wrap '>
            <li className='mx-2'><Link href='/'>Tesla &copy; 2023</Link></li>
            <li className='mx-2'><Link href='/'>Privacy & Legal</Link></li>
            <li className='mx-2'><Link href='/'>Vehicle Recalls</Link></li>
            <li className='mx-2'><Link href='/'>Contact</Link></li>
            <li className='mx-2'><Link href='/'>News</Link></li>
            <li className='mx-2'><Link href='/'>Get Updates</Link></li>
            <li className='mx-2'><Link href='/'>Locations</Link></li>
          </ul>
        </div>
        </div>
    

    </div>
  )
}

export default Desktopacessories