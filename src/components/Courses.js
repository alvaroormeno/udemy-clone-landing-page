import React from 'react'
import Course from './Course'
// Import data array with 5 object inside, each carrying information for the course component
import courseData from '../data.json'

function Courses() {
  return (
    <div className='flex flex-col items-start mx-8 space-y-3 mt-14 mb-8'>
        <h2 className='text-4xl font-LibreBaskerville'>A broad selection of courses</h2>
        <h3 className='text-xl'>Choose from 183,000 online video courses with new addition published every month</h3>
        <div className='text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer '>
            <h3>Python</h3>
            <h3>Excel</h3>
            <h3>Web Development</h3>
            <h3 className='text-black'>JavaScript</h3>
            <h3>Data Science</h3>
            <h3>AWS Certification</h3>
            <h3>Drawing</h3>
        </div>

        <div className='text-left w-full border border-gray-300 p-7'>
            <h2 className='text-2xl font-bold mb-2'>Grow your software development skills with JavaScript</h2>
            <h3>JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers.</h3>
            <button className='border border-black font-bold  text-sm p-2 mt-4 mb-8'>
                Explore JavaScript
            </button>

            {/* Mapping */}
            <div className='flex gap-4 flex-wrap lg:flex-nowrap'>
                {courseData.map((data) => (
                    <div className='h-60 w-60' key={data.id}>
                        <Course info={data}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Courses