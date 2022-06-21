import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

function Main() {
  return (
    <div className='w-full h-96 border border-gray-400 relative'>
        <img 
            src={img1} 
            alt="student working on laptop" 
            className='h-full w-full object-cover bg-no-repeat bg-bottom' 
        />
        <div className='absolute h-40 w-[440px] bg-white shadow-lg top-12 left-8 p-4 flex flex-col items-start justify-center '>
            <h1 className='text-3xl font-bold mb-2'>Get there. From here.</h1>
            <h3 className='text-xl'>Chart your path to success</h3>
            <h3 className='text-xl'>Log in for limited-time savings on the latest topics</h3>
        </div>
    </div>
  )
}

export default Main