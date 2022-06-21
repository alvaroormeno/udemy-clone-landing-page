import React from 'react'
import {ShoppingCartIcon, SearchIcon, GlobeAltIcon, MenuIcon} from '@heroicons/react/outline'



function Navbar() {
  return (
    <div className='flex space-x-4 bg-white h-[75px] shadow-lg text-center justify-between items-center px-4'>
        <MenuIcon className='h-6 w-6 md:hidden'/>
        <h2 className='text-3xl font-bold'>udemy</h2>
        {/* Note: md:blocks means that anything after md screen size, block the hidden instruction */}
        <h3 className='text-sm hidden md:block'>Categories</h3>
        {/* Note: hidden instructs to hide element, but md:flex overrides it by anytime screen size bigger than md it instructs element to flex */}
        <form className='hidden md:flex bg-gray-100 border border-black rounded-3xl flex-1 h-12 items-center'>
            <SearchIcon className='h-5 w-5 mx-4 text-gray-400'/>
            <input 
                type="text"
                placeholder='Search for anything'
                className='bg-transparent text-sm outline-none'
            />
        </form>
        <h3 className='hidden lg:block text:sm'>Udemy Business</h3>
        <h3></h3>
    </div>
  )
}

export default Navbar