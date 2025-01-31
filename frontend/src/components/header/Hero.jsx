import React from 'react'
import { IoSearch, IoSearchOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
      <h1 className='mt-6 mb-10 text-4xl xl:text-5xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>Welcome to the <span className='text-purple-600'>foodie World..!!</span></h1>
      <form action='/search' className='bg-white p-4 rounded relative flex items-center'>
      <IoSearchOutline className='w-5 h-5 mr-2 text-neutral-500'/>
      <input className='outline-none w-full placeholder:text-[#1b2629] rounded-xl' name='query' type='search'  placeholder='Search for a recipe' id='search' required=''/>
      </form>
    </div>
  )
}

export default Hero
