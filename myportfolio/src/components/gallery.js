import React, { useEffect, useRef, useState } from 'react';
import Controller from './imgs/controller.png';
import ControllerOutline from './imgs/contoller-outline.PNG';
import ControllerDetailOne from './imgs/controller-details-1.PNG';
import ControllerDetailTwo from './imgs/contoller-details-2.PNG';
import ControllerDetailThree from './imgs/controller-details-3.PNG';
import GameboyTNOne from './imgs/gamboy-detail-1.PNG';
import GameboyTNTwo from './imgs/gameboy-detail-2.PNG';
import Gameboy from './imgs/gameboy.png';
import GameboyOutline from './imgs/gameboy-outline.PNG';
import WatchOutline from './imgs/watch-closeshot-outline.jpeg';
import Watch from './imgs/watch-closeshot.jpeg';
import WatchCrownOutline from './imgs/watch-crown-outline.jpg';
import WatchCrown from './imgs/watch-crown.jpg';
import WatchGear from './imgs/watch-gear.jpg';
import WatchGearOutline from './imgs/watch-grear-outline.jpg';
import WatchInsideOutline from './imgs/watch-side-outline.jpg';
import WatchInside from './imgs/watch-side.jpg';
import ChessOne from './imgs/chess-one.png';
import ChessTwo from './imgs/chess-two.png';
import ChessThree from './imgs/chess-three.png';
import ChessFour from './imgs/chess-four.png';
import ChessFive from './imgs/chess-five.png';
import IconOne from './imgs/green-theme-icons.png';
import IconTwo from './imgs/line-icons.png';
import {motion, useElementScroll, useTransform, useViewportScroll} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const exitVariants ={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{duration:1.5, delay:0.2}
  },
  exit:{opacity:0, y:'100vh',
    transition:{ease:'easeInOut',duration:0.4}
}
}

const imgsVariants ={
  hidden:{
    rotateY:90,
    opacity:0,
  },
  visible:{
    rotateY:0,
    opacity:1,
    transition :{duration:1.5, ease:'easeOut', delay:0.8},
  }
}

const Gallery = () => {
  
  const relativePosition={position:"relative",top:"0px"}
  const graphicImg={width:"80vw", maxWidth:"520px", margin:"10px",}
  const heroImg={width:"80vw", maxWidth:"520px", margin:"10px"}
  const thumbnails={width:"30vw",maxWidth:"200px"}

  // const [controllerThumbnails] =useState([{img:ControllerDetailThree,key:'ControllerDetailThree',alt:'controller detail of handler'},{img:ControllerDetailOne,key:'ControllerDetailOne',alt:'controller detail of keyboard'},{img:ControllerDetailTwo,key:'ControllerDetailTwo',alt:'controller detail of handler'}])

  const[gameboyThumbnails] =useState([{img:GameboyTNTwo ,key:"GameboyTNTwo " , alt:"gameboy thumbnails"},{img:GameboyTNOne ,key:"GameboyTNOne" , alt:"gameboy thumbnails"}])

  const [watchThumbnails]=useState([{imgOne:Watch,keyOne:"watch",altOne:"watch",imgTwo:WatchOutline,keyTwo:"watch outline", altTwo:"watch outline"},
  {imgOne:WatchCrown,keyOne:"watch crown",altOne:"watch crown",imgTwo:WatchCrownOutline,keyTwo:"Watch Crown Outline", altTwo:"Watch Crown Outline"},
  {imgOne:WatchGear,keyOne:"Watch Gear",altOne:"Watch Gear",imgTwo:WatchGearOutline,keyTwo:"Watch Gear Outline", altTwo:"Watch Gear Outline"},
  {imgOne:WatchInside,keyOne:"Watch Inside",altOne:"Watch Inside",imgTwo:WatchInsideOutline,keyTwo:"Watch Inside Outline", altTwo:"Watch Inside Outline"}])


 
  const [chess] =useState([{img:ChessOne,key:"chess one",alt:"chess overall"},
  {img:ChessTwo,key:"chess two",alt:"chess overall"},
  {img:ChessThree,key:"chess three",alt:"chess details"},
  {img:ChessFour,key:"chess four",alt:"chess details"},
  // {img:ChessFive,key:"chess five",alt:"chess details"}
])

  const [icons] =useState([{img:IconOne, key:"icons one", alt:"icons set"},
  {img:IconTwo, key:"icons two", alt:"icons set"},])


  const {scrollYProgress}=useViewportScroll();

   
   const [ref, inView,entry]=useInView({threshold:0.3});
    
  //  const y=useTransform(scrollYProgress, entry, ['10vh','-10vh','0']);
  //  const opacity=useTransform(scrollYProgress, entry, ['0','0.5','1']);  


  return (
    <motion.div className="gallery" variants={exitVariants} initial="hidden" animate="visible" exit="exit">
      <section style={{textAlign:"center", marginTop:"100px" }}>
        <h1>2D Graphic Illustration</h1>
        <div className="imgs-group">
          <motion.img src={Controller} alt="controller" style={graphicImg} variants={imgsVariants} whileHover={{scale:1.1}}/>
          <motion.img src={Gameboy} alt="gameboy"  style={graphicImg} variants={imgsVariants} whileHover={{scale:1.1}}/>
        </div>
      </section>
      {/* <section>
        <h1 className="project-title">2D Graphic Illustration</h1>
        <ul className="imgs-group">
          <li style={relativePosition}>
            <ul>
              <li className="hero-img" ><img src={Controller} alt="controller" style={heroImg} /></li>
              <li><img src={ControllerOutline} alt="controller outline" style={heroImg} /></li>
            </ul>
          </li>
          <li>
            <ul className="thumbnails">
              {controllerThumbnails.map(each=>(<li key={each.key}><img src={each.img} alt={each.alt} style={thumbnails} /></li>))}
            </ul>
          </li>
        </ul>
      </section> */}

      {/* <motion.section style={{x,opacity}}>
        <ul className="imgs-group">
        <li style={relativePosition}>
            <ul>
              <li className="hero-img" ><img src={Gameboy} alt="gameboy" style={heroImg} /></li>
              <li><img src={GameboyOutline} alt="gameboy outline" style={heroImg} /></li>
            </ul>
          </li>
          <li>
            <ul className="thumbnails">
            {gameboyThumbnails.map(each=>(<li key={each.key}><img src={each.img} alt={each.alt} style={thumbnails} /></li>))}
            </ul>
          </li>
        </ul>
      </motion.section> */}
      


      <section>
        <h1 className="project-title">3D Modeling</h1>
        <ul>
        <li>
            <ul className="responsive-style">
              {watchThumbnails.map(each=>(
                <motion.div style={relativePosition} ref={ref} initial={{opacity:0, y:"10vh"}} animate={{opacity:inView?1:0, y:inView?0:"10vh"}} transition={{duration:1.5}}> 
                   <li className="hero-img" key={each.keyOne} ><img src={each.imgOne} alt={each.altOne} style={heroImg} /></li>
                   <li key={each.keyTwo}><img src={each.imgTwo} alt={each.altTwo} style={heroImg} /></li>
                </motion.div>
              ))}
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <ul className="responsive-style">
          {chess.map(each=>(<li key={each.key}><img src={each.img} alt={each.alt} style={heroImg}/></li>))}
        </ul>
      </section>


      <section>
        <h1 className="project-title">Icons Design</h1>
        <ul className="icon-imgs">
          {icons.map(each=>(<li key={each.key}><img src={each.img} alt={each.alt} style={heroImg}/></li>))}
        </ul>
      </section>
    </motion.div>
    );
}
 
export default Gallery;