import React, { createContext } from 'react';
import ExpandMenu from './expandedMenu';
import logo from './icons/logo.svg'

const Nav = () => {
  
  const toggleDisplay=()=>{
    let squareTop= document.querySelectorAll(".top");
    let squareBottom =document.querySelectorAll(".bottom");
    let expandMenu =document.querySelector(".expand-menu");
    squareTop.forEach( 
      square=>{square.classList.toggle('expand')} );

      squareBottom.forEach( 
        square=>{square.classList.toggle('move-up')} );
     expandMenu.classList.toggle('expand-show');
    
  }

  return ( <div>
        <nav>
          <ul>
            <li>
            <a href="myportfolio\public\index.html"><img src={logo} alt="logo" className="icon-logo"/></a>
            </li>
            <li className="menu" onClick={toggleDisplay}>
              <div> 
                <div className="menu-square top"></div>
                <div className="menu-square bottom"></div>
              </div>
              <div>
                <div className="menu-square top"></div>
                <div className="menu-square bottom"></div>
              </div>
            </li>
          </ul>
        </nav>
        <ExpandMenu toggle={toggleDisplay}/>
    </div>
     );
}
 
export default Nav;