import React from 'react';
import Designer from './icons/designer.svg';
import Coder from './icons/coder.svg';
import Planter from './icons/planter.svg';
import UXdesigner from './icons/uxdesigner.svg';
import Resume from './files/Resume - Leah Zhou.pdf';
import { Link, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

const exitVariants ={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{duration:1.5, delay:0.2}
  },
  exit:{opacity:0, y:'100vh',
    transition:{ease:'easeInOut', duration:0.4}
}
}

const About = () => {
  
  const linkStyle ={textDecoration:"none"}
  const linkFont ={color:"#EFCF47", fontWeight:"600"}
  return (
    <motion.section variants={exitVariants} initial="hidden" animate="visible" exit="exit"> 
      <section  style={{margin:'120px 80px', maxWidth:'600px'}}>
        <h1 style={{fontSize: '64px'}}>Hi,</h1>
        <p>My name is Leah Zhou, a front-end coder and a UX and UI designer with a full passion for creating beautiful and interactive design end digital experience. I also love photography and planting.
My goal is to connect people with brands and businesses via design. I believe a good design could increase people's interest and love for the brand or business.</p>
        <a className="link-btn" href={Resume} download>Download Resume</a>
      </section>

      <section className="margin-top">
        <h1 style={{fontSize:"36px"}}>Professional Skills</h1>
        <ul>
          <li className="style-grid content-margin">
            <img src={Designer} className="icon-head" alt="designer head icon" />
            <div>
              <h3>I believe creativity makes the world colorful!</h3>
              <p>I love to contribute my creativity and professional design skills to my work. I am flexible to use Adobe Illustrator, Photoshop, Maya, and other popular design tools to create UI design such as icons, logos, and illustration. I am also professional in using Figma, Adobe XD, and Axure to create high-quality Persona, journey map, wireframe, and digital prototypes.</p>
              <Link to="/teashop project" style={linkStyle}><p style={linkFont}>Check up relative work</p></Link>
            </div>
          </li>
          <li className="style-grid content-margin">
            <img src={Coder} className="icon-head" alt="coder head icon" />
            <div>
              <h3>I could sit all day for coding! </h3>
              <p>Coding makes my life distinctive. I love to dive into the coding world and explore any possibilities in interaction design. With the professional skills of HTML, CSS, SCSS, JS, REACT, BOOTSTRAP, other frameworks, and libraries, I have hands-on experience in building a user-friendly and responsive webpage for clients.</p>
              <Link to="/web survey project" style={linkStyle}><p style={linkFont}>Check up relative work</p></Link>
            </div>
          </li>
          <li className="style-grid content-margin">
            <img src={UXdesigner} className="icon-head" alt="ux designer head icon" />
            <div>
              <h3>I am a UX designer with user empathy.</h3>
              <p>I believe that a good design can not ignore user experience. I am good at applying professional communication skills, user research, and analytical skills in UX research. Proficiency in Figma, Adobe XD and other design tools allow me to create intuitive Persona, user journey, wireframe, and interactive prototype, which support me in visual communication with clients. </p>
              <Link to="/greenp project" style={linkStyle}><p style={linkFont}>Check up relative work</p></Link>
            </div>
          </li>
          <li className="style-grid content-margin">
            <img src={Planter} className="icon-head" alt="planter head icon" />
            <div>
              <h3>Planting and Photoshooting are my loves</h3>
              <p>I love planting and photography in my daily life. I have 20 small and big plants in my place, and I could see the numbers will go higher...Oops, sometimes you just can not help to get one more as a plant lover.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className='contact-section'>
          <h1>Want to have a chat?</h1>
          <address><a href="mailto:leahzhoulz@gmail.com" className="btn-contact">CONTACT ME</a></address>
        </section>
    </motion.section>

    );
}
 
export default About;