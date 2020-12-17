import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandMenu from './expandedMenu';
import logo from './icons/logo.svg';
import {motion} from 'framer-motion';
// import L from './icons/logo-l.svg';
// import Z from './icons/logo-z.svg';

const menuVariants ={
  open:{ rotate:135},
  close:{rotate:0}
}

const Nav = () => {

  const [isOpen, setIsOpen]=useState(false)

  const openMenu=()=>{
    let expandMenu =document.querySelector(".expand-menu");
     expandMenu.classList.toggle('expand-show');

     setIsOpen(!isOpen)
  }


  return ( 
     <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" ><img src={logo} alt="logo" className="icon-logo"/></NavLink>
            </li>
            <motion.li className="menu" onClick={openMenu} variants={menuVariants} animate={isOpen? "open":"close"}>
              <div>  
                <div className="menu-square"></div>
                <div className="menu-square"></div>
              </div>
              <div>
                <div className="menu-square"></div>
                <div className="menu-square"></div>
              </div>
            </motion.li>
            <ExpandMenu handleMenu={openMenu} />
          </ul>
        </nav>
    </div>
     );
}
 
export default Nav;