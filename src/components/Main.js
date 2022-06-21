import React from 'react'
// import img3 from "process.env.PUBLIC_URL + /assets/img3.jpg"


function Main() {
  return (
    <div className='w-full h-96 border border-gray-400 relative'>
        <img
            // Using process.env.PUBLIC_URL to import images from public folder straight in <img> src property, no need to import it above to actual component  
            src={process.env.PUBLIC_URL + "/assets/mainImg.jpg"} 
            alt="student working on laptop" 
            className='h-full w-full object-cover bg-no-repeat bg-bottom' 
        />
        <div className='absolute h-40 w-[440px] bg-white shadow-lg top-12 left-8 p-4 flex flex-col items-start justify-center '>
            <h1 className='text-3xl mb-2 font-LibreBaskerville'>Get there. From here.</h1>
            <h3 className='text-xl'>Chart your path to success.</h3>
            <h3 className='text-xl'>Log in for limited-time savings on the latest topics</h3>
        </div>
    </div>
  )
}

export default Main