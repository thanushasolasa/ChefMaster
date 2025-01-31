import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MobileNav = ({menuItems,Logo,onClose,hideleft,onOpen}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
      <a href='/'>
      <img src={Logo} alt='logo'/>
      </a>
      <button onClick={onOpen} className='border border-primary rounded'>
      <FaBars className='w-7 h-7'/>
      </button>

      <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideleft} flex justify-center items-center`}>
        <button onClick={onClose} className='absolute right-8 top-32'>
            <IoClose className='w-7 h-7'/>
        </button>

        <div>
            <ul className='flex flex-col gap-5'>
                {
                    menuItems?.map((menu, index) => (
                        <li key={index}>
                            <Link to={menu} className='font-medium capitalize text-secondary text-2xl'>{menu}</Link>
                        </li>
                    ))
                }
            </ul>
            <ul className='flex items-right gap-2 font-medium mt-10'>
        <li>
            <button className='text-secondary px-4 py-2 rounded border'>Log In</button>
        </li>
        <li>
            <button className='text-secondary px-4 py-2 rounded border'>Sign Up</button>
        </li>
      </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
