import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = ({menuItems,Logo}) => {
  return (
    <div className='h-16 flex justify-between items-center px-9 lg:px-12'>
      <a href='/'>
      <img src={Logo} alt='logo' className='h-20 w-auto'/>
      </a>
      <ul className='flex gap-10 mx-auto'
          style={{ marginLeft: 'auto', marginRight: 'auto', transform: 'translateX(300px)' }}>
        {
            menuItems.map((menu,index)=>(
                <li key={index}>
                    <Link to={menu} className='font-medium capitalize text-secondary'>{menu}</Link>
                </li>
            ))
        }
      </ul>
      <ul className='flex items-right gap-2 font-medium'>
        <li>
            <button className='text-secondary px-4 py-2 rounded'>Log In</button>
        </li>
        <li>
            <button className='text-secondary px-4 py-2 rounded'>Sign Up</button>
        </li>
      </ul>
    </div>
  )
}

export default DesktopNav
