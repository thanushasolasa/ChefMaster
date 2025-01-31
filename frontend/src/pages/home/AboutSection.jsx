import React from 'react'
import AboutImg from "../../assets/about-image.jpg"
const AboutSection = () => {
  return (
    <div className='overflow-hidden md:flex flex-row justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>

      <div className='text-start sm:w-1/2'>
        <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed '>Vegan foodie who loves to experiment with recipies</h2>
        <p className='text-xl mt-4 text-[#5c5c5c]'>
        Being a vegan foodie who loves food must make discovering new recipes and flavors a delightful adventure! If you ever want to explore vegan recipes, food blogs, or even try creating your own vegan dishes, feel free to ask.
        <br/> <br/> 
        I'm here to help with ideas, recipes, or anything else you might need.
        </p>
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-12 inline-flex'>
            <button className='py-4 px-8 bg-btnColor text-white hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
          </div>
        </div>
      </div>

      <div>
        <img src={AboutImg} alt="Featured Image" className='rounded-md'/>
      </div>
    </div>
  )
}

export default AboutSection
