import React from 'react';
// import Block from './imgs/blocks.svg'
import {motion} from 'framer-motion';
import Slogon from './slogon';
import Cubes from './cube';


// const titleVariants={
//   hidden:{y:-200, opacity:0},
//   visible:{y:0, opacity:1,
//      transition:{type:"spring"}
//   }
// }
const Title = () => {
  return ( 
    <div className="margin-top" >
           <Slogon />
        {/* <h1 className="fade-in">DESIGN IT, BUILD IT, LOVE IT!</h1> */}
        {/* <h3 className="slow-fade">Welcome to Leah Zhou's Portfolio</h3> */}
        {/* <p className="small-words slow-fade">Scroll down to see more works</p> */}
          <Cubes />
    </div>
   );
}

export default Title;