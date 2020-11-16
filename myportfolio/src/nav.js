import React from 'react';
import logo from './icons/logo.svg'


const Nav = () => {
  return ( <div>
        <nav>
          <ul>
            <li>
            <a href="myportfolio\public\index.html"><img src ={logo} alt="logo" className="icon-logo"/></a>
            </li>
            <li className="menu">
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
    </div>
     );
}
 
export default Nav;