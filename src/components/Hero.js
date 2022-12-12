import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[440px] text-white'>
        <div className='absolute w-full h-[400px]'></div>
        <img
          className='w-full h-full object-cover'
          src='/images/Rec.png'
          alt=''
        />
        <div className='absolute w-full top-[15%] p-4 md:px-48'>
          <h3 className='text-3xl md:text-5xl'>Watch</h3>
          <h3 className='text-3xl md:text-5xl my-4'>Something</h3>
          <h3 className='text-3xl md:text-5xl'>Incredible.</h3>
        </div>
    </div>
    
  )
}

export default Hero
