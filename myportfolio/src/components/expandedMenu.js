import React, { useState } from 'react';
 import INS from './icons/instagram.svg';
 import CodePen from './icons/codePen.svg';
 import Linkedin from './icons/linkedin.svg';
//  import Pointer from './icons/pointer-block.svg';
 import {NavLink} from 'react-router-dom';


const ExpandMenu = (props) => {
  const [opts]=useState([{name:'WORK',link:'/portfolio', key:'work'},{name:'ABOUT', link:'/about',key:'about'},{name:'GALLERY',link:'/gallery',key:'gallery'},]);
  
   const linksStyle={
     textDecoration:'none',
   }


  //  const toggleMenu =()=>{
  //    let expandMenu = document.querySelector(".expand-menu");
  //     expandMenu.classList.toggle("expand-show");

  //  }
  // const [icons]=useState([{name:'{INS}', key:'ins'}, {name:'{CodePen}', key:'codepen'},{name:'{Linkedin}', key:'linkedin'},])

  return ( 
    <div className="expand-menu">
      <div className="btn-close" onClick={props.handleMenu}>
        <div className="menu-square"></div>
        <div className="menu-square"></div>
        <div className="menu-square"></div>
      </div>
      <ul>
       {opts.map(opt=>(<NavLink to={opt.link} style={linksStyle} className="non-active" activeClassName="is-active" >
         <li style={{color:" #EFCF47"}} key={opt.key} onClick={props.handleMenu}> {opt.name}</li></NavLink>))}
        <li key='ins'><a href="#" target="_blank"><img src={INS} alt="intagram" className="icon" /></a></li>
        <li key='linkedin'><a href="https://www.linkedin.com/in/leah-zhou-853ba8174/" target="_blank"><img src={Linkedin} alt="linkedin" className="icon" /></a></li>
        <li key='codePen'><a href="https://codepen.io/leah-zhou" target="_blank"><img src={CodePen} alt="codePen" className="icon" /></a></li>
       {/* {icons.map(icon=>( <li key={icon.key}><a href="#"><img src={icon.name} className="icon" /></a></li>))} */}
      </ul>
    </div>
   );
}
 
export default ExpandMenu;