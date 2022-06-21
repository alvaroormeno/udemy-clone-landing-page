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
        <h3 className=' text-center hidden lg:block text-sm'>Udemy Business</h3>
        <h3 className=' hidden lg:block   text-sm'>Teach on Udemy</h3>
        <div className='flex'>
            <SearchIcon className='h-6 w-6 text-gray-400 md:hidden'/>
            <ShoppingCartIcon className='h-6 w-6'/>
        </div>
        <div className='hidden md:flex pr-4 space-x-4 justify-center'>
            <button className='h-10 w-20 border-[1px] border-black text-sm font-bold hover:bg-[#F5F5F5]'>
                Log in
            </button>
            <button className='h-10 w-20 border-[1px] border-black bg-black text-sm text-white font-bold'>
                Sign up
            </button>
            <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]'>
                <GlobeAltIcon className='h-5 w-5'/>
            </button>

        </div>
    </div>
  )
}

export default Navbar