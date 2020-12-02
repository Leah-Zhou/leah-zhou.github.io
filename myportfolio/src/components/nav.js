import React, { createContext } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandMenu from './expandedMenu';
import logo from './icons/logo.svg';
// import L from './icons/logo-l.svg';
// import Z from './icons/logo-z.svg';

const Nav = () => {
  const openMenu=()=>{
    let expandMenu =document.querySelector(".expand-menu");
    // let openBtn = document.querySelectorAll('.open');
    // openBtn.forEach(square=>{square.classList.add('.expand')});

    // let squareTop= document.querySelectorAll(".top");
    // let squareBottom =document.querySelectorAll(".bottom");
    // squareTop.forEach( 
    //   square=>{square.classList.toggle('expand')} );
    //   squareBottom.forEach( 
    //     square=>{square.classList.toggle('move-up')} );

     expandMenu.classList.toggle('expand-show');
  }

//   const closeMenu=()=>{   
//     let expandMenu =document.querySelector(".expand-menu");
//     expandMenu.classList.toggle('expand-show');
//  }


  return ( 
     <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/portfolio" ><img src={logo} alt="logo" className="icon-logo"/></NavLink>
            </li>
            <li className="menu" onClick={openMenu}>
              <div> 
                <div className="menu-square"></div>
                <div className="menu-square"></div>
              </div>
              <div>
                <div className="menu-square"></div>
                <div className="menu-square"></div>
              </div>
            </li>
          </ul>
        </nav>
        <ExpandMenu handleMenu={openMenu} />
    </div>
     );
}
 
export default Nav;