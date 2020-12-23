import React from 'react';
import {motion} from 'framer-motion';


const cubeVariants ={
  hidden:{rotateX:0,
  },
  visible:{
    rotateX:130, 
    transition:{yoyo:Infinity, duration:3}
  }
}


const Cubes = () => {
  return (  
    <div className="cube-container">
          <motion.div className="cube" variants={cubeVariants} initial="hidden" animate="visible">
           <figure className="face front"><h2 style={{fontWeight:600}}>Welocome to Leah Zhou's Portfolio</h2></figure>
           <figure className="face back"></figure>
           {/* <figure className="face right"></figure>
           <figure className="face left"></figure> */}
           <figure className="face top"></figure>
           <figure className="face bottom"></figure>
         </motion.div>
    </div>
  );
}
 
export default Cubes;