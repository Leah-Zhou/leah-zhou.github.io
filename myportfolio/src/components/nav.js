import React, { createContext } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandMenu from './expandedMenu';
import logo from './icons/logo.svg';
import {motion} from 'framer-motion';
// import L from './icons/logo-l.svg';
// import Z from './icons/logo-z.svg';

const Nav = () => {
  const openMenu=()=>{
    let expandMenu =document.querySelector(".expand-menu");
     expandMenu.classList.toggle('expand-show');
  }


  return ( 
     <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" ><img src={logo} alt="logo" className="icon-logo"/></NavLink>
            </li>
            <motion.li className="menu" onClick={openMenu} whileTap={{scale:1.2}}>
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