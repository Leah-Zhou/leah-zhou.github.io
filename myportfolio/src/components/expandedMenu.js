import React, { useState } from 'react';
 import INS from './icons/instagram.svg';
 import CodePen from './icons/codePen.svg';
 import Linkedin from './icons/linkedin.svg';
 import {Link, NavLink} from 'react-router-dom';


const ExpandMenu = (props) => {
  const [opts]=useState([{name:'WORK',link:'/work', key:'work'},{name:'ABOUT', link:'/about',key:'about'},{name:'GALLERY',link:'/gallery',key:'gallery'},{name:'CONTACT', link:'/contact', key:'contact'},]);
  
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
      <ul>
       {opts.map(opt=>(<NavLink to={opt.link} style={linksStyle} activeClassName="is-active" >
         <li style={{color:" #EFCF47"}} key={opt.key} onClick={props.toggle}> {opt.name}</li></NavLink>))}
       <li key='ins'><a href="#"><img src={INS} alt="intagram" className="icon" /></a></li>
       <li key='linkedin'><a href="#"><img src={Linkedin} alt="linkedin" className="icon" /></a></li>
       <li key='codePen'><a href="#"><img src={CodePen} alt="codePen" className="icon" /></a></li>

       {/* {icons.map(icon=>( <li key={icon.key}><a href="#"><img src={icon.name} className="icon" /></a></li>))} */}
      </ul>
    </div>
   );
}
 
export default ExpandMenu;