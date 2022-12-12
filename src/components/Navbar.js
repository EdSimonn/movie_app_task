import React from 'react'

const Navbar = () => {
  return (
    <div className='flex fixed bg-black items-center justify-between p-6 z-[100] w-full'>
      <a className='border-gray-600' href='ww'>
        <h1 className='sm:flex sm:justify-center text-white font-normal cursor-pointer border-gray-600 ml-6 md:px-36'>
          MyTestApp
        </h1>
      </a>
    </div>
  )
}

export default Navbar
