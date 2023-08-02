import React from 'react'
import Image from 'next/image'
function Model3Structure() {
  return (
    <div className='bg-white'>
        <div className='relative  h-[15rem] md:h-[30rem] lg:h-[40rem]'>
            <Image src='/Model-3/model-3-hero-a-desktop.avif' alt='Image not found !' fill />
        </div>
        <div>
          <h1 className='absolute top-[720px]  left-[256px] text-black  '>Impact Protection</h1>
          <div className=' h-40 w-1  bg-black absolute top-[728px] left-[248px] ' />
          <div />
        </div>
    </div>
  )
}

export default Model3Structure