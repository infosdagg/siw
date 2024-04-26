import React from 'react'

export const Navbar = () => {
  return (
    <div className='translate-y-16 bg-navPurple rounded-xl flex flex-row  justify-between items-center w-11/12 h-14 p-4 border'>   
        <div className='text-iconColor text-[25px]'>
            PCBDesign
        </div>
        <div className='flex flex-row items-center gap-x-5 text-iconColor transition-all duration-200'>
            <a href='#' className='text-buttonHover'>Home</a>
            <a href='#' className='hover:text-buttonHover'>Welcome</a>
            <a href='#' className='hover:text-buttonHover'>About</a>
            <a href='#' className='hover:text-buttonHover'>Products</a>
        </div>
    </div>
  )
}
