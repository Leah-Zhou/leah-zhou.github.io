import React, { useEffect, useState } from 'react';
import L from './icons/logo-l.svg';
import Z from './icons/logo-z.svg';
// import Block from './imgs/blocks.svg'
import {motion} from 'framer-motion';

const cubeVariants ={
  hidden:{rotateX:0},
  visible:{
    rotateX:130, 
    transition:{yoyo:Infinity, duration:3}
  }
}

const titleVariants={
  hidden:{y:-200, opacity:0},
  visible:{y:0, opacity:1,
     transition:{type:"spring"}
  }
}
const Title = () => {
  return ( 
    <div className="margin-top">
       <div className="cube-container" >
         <motion.div className="cube" variants={cubeVariants} initial="hidden" animate="visible">
           <figure className="face front"></figure>
           <figure className="face back"></figure>
           {/* <figure className="face right"></figure>
           <figure className="face left"></figure> */}
           <figure className="face top"></figure>
           <figure className="face bottom"></figure>
         </motion.div>
         <motion.section variants={titleVariants}>
        <h1 className="fade-in">DESIGN IT, BUILD IT, LOVE IT!</h1>
        <h4 className="slow-fade">Welcome to Leah Zhou's Portfolio</h4>
        <p className="small-words slow-fade">Scroll down to see more works</p>
      </motion.section>

       </div>
    </div>
   );
}

export default Title;