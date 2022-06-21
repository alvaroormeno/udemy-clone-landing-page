import React from 'react'
import {StarIcon} from "@heroicons/react/solid"
// import img2 from '../assets/img2.jpg'

function Course({info}) {
  return (

    <div className='flex flex-col items-start space-y-[1px]'>
        <img 
            src={info.path} 
            alt=""
            className='h-32 w-full' 
        />
        <h2 className='font-bold text-md pt-1'>{info.title}</h2>
        <h2 className='text-xs text-gray-700'>{info.username}</h2>
        <div className='flex space-x-1'>
            <h3 className='text-orange-800 font-bold text-sm'>{info.vote}</h3>
            <div className='flex items-center'>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
                <StarIcon className='w-4 text-orange-400'/>
            </div>
            <h3 className='text-xs'>{info.students}</h3>
        </div>
        <div className='flex space-x-4 items-center'>
            <h3 className='text-black font-bold'>{info.price}</h3>
            <h3 className='text-gray-800 text-sm line-through'>{info.oldPrice}</h3>
        </div>
        
    </div>
  )
}

export default Course