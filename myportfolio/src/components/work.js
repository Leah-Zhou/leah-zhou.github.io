import React from 'react';
import Content from './content';
import Title from './title';
import {motion} from'framer-motion';

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

const Work = () => {
  return ( 
    <motion.div variants={exitVariants} initial="hidden" animate="visible" exit="exit">
    <Title />
    <Content />
    </motion.div>

   );
}
 
export default Work;