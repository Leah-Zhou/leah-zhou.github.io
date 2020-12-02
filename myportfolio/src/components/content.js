import React, { useEffect, useState } from 'react';
import Phone from './imgs/phoneImg.png';
import HeroBubbleTea from './imgs/heroImg-bubble-teashop.png';
import HeroGreenP from './imgs/heroImg-greenP.png';
import HeroWatch from './imgs/watch-gear.jpg';
import BG from './imgs/background.svg';
import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';


const Content = () => {
 const [offset, setOffset] =useState(0);

 const removeStyle={textDecoration:'none'}

 const parallaxUp={transform:'translateY(-'+offset*0.6+'px)', backgroundColor:"rgba(225,225,225,0.5)",};
 const parallaxDown={transform:'translateY('+offset*0.6+'px)', transformDelay:offset*0.2+'s'};

 useEffect(()=>{
  function handleScroll (){
    setOffset(window.pageYOffset)
   }
   window.addEventListener("scroll", handleScroll);

   return()=>{window.removeEventListener("scroll", handleScroll)}
 },[])

  return ( 
  <div>
    <Parallax bgImage={BG}>
    <ul className="container" >
      <Link to="/teashop project" style={removeStyle}>
      <li style={parallaxUp}>
      <h3 className="project-title">BRANDING PROJECT - UNICUP BUBBLE TEASHOP</h3>
      <img className="show-case" src={HeroBubbleTea} alt="bubble teashop showcase" />
      </li>
      </Link>

      <Link to="/greenp project" style={removeStyle}>
      <li style={parallaxUp}>
      <h3 className="project-title">UX REDESIGN PROJECT - GREEN P PARKING APP</h3>
      <img className="show-case" src={HeroGreenP} alt="green p showcase" />
      </li>
      </Link>

      <Link to="/watch" style={removeStyle}>
      <li style={parallaxUp}>
      <h3 className="project-title">3D Product Modelling - Pocket Watch</h3>
      <img className="show-case" src={HeroWatch} alt="pockert watch show case" />
      </li>
      </Link>
    </ul>
    <ul>
    </ul>
    </Parallax>
  </div> );
}
 
export default Content;