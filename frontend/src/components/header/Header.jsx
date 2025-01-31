import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "/chefmaster.png";
import MobileNav from './MobileNav';


const Header = () => {
    const [hideleft,setHideLeft] = useState("-left-[1000px]");
    const menuItems = ["recipes","about","contact"];

    const onOpen = () => {
        setHideLeft("left-0");
    }
    const onClose = () => {
        setHideLeft("-left-[1000px]");
    }
  return (
    <>
    <div className='max-[900px]:hidden'>
      <DesktopNav menuItems={menuItems} Logo={logo}/>
      </div>
    <div className='min-[900px]:hidden'>
      <MobileNav
      menuItems={menuItems}
      Logo = {logo}
      onClose={onClose}
      hideleft={hideleft}
      onOpen={onOpen}
      />
      </div>
    </>
  )
}

export default Header
