import React, { useState } from 'react';
 import INS from './icons/instagram.svg';
 import CodePen from './icons/codePen.svg';
 import Linkedin from './icons/linkedin.svg';
//  import Pointer from './icons/pointer-block.svg';
 import {NavLink} from 'react-router-dom';
 import {motion} from 'framer-motion';


const ExpandMenu = (props) => {
  const [opts]=useState([{name:'WORK',link:'/', key:'work'},{name:'ABOUT', link:'/about',key:'about'},{name:'GALLERY',link:'/gallery',key:'gallery'},]);
  
   const linksStyle={
     textDecoration:'none',
   }
   const boxes =[1, 1.5, 2]

  return ( 
    <div className="expand-menu">
      <ul>
       {opts.map(opt=>(<NavLink to={opt.link} style={linksStyle}  exact activeClassName="is-active" >
         <li style={{color:" #EFCF47"}} key={opt.key} onClick={props.handleMenu}> {opt.name}</li></NavLink>))}
        <li key='ins'><a href="https://www.instagram.com/leahzzzhou/" target="_blank"><img src={INS} alt="intagram" className="icon" /></a></li>
        <li key='linkedin'><a href="https://www.linkedin.com/in/leah-zhou-853ba8174/" target="_blank"><img src={Linkedin} alt="linkedin" className="icon" /></a></li>
        <li key='codePen'><a href="https://codepen.io/leah-zhou" target="_blank"><img src={CodePen} alt="codePen" className="icon" /></a></li>
       {/* {icons.map(icon=>( <li key={icon.key}><a href="#"><img src={icon.name} className="icon" /></a></li>))} */}
      </ul>
    </div>
   );
}
 
export default ExpandMenu;