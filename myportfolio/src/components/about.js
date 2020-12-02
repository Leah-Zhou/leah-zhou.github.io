import React from 'react';
import Designer from './icons/designer.svg';
import Coder from './icons/coder.svg';
import Planter from './icons/planter.svg';
import UXdesigner from './icons/uxdesigner.svg';
import { NavLink } from 'react-router-dom';

const About = () => {
  
  return (
    <section> 
      <section  style={{margin:'120px 80px', maxWidth:'600px'}}>
        <h1 style={{fontSize: '64px'}}>Hi,</h1>
        <p>My name is Leah Zhou, a front-end coder and a UX and UI designer with full passion for creating beautiful and interactive design end digital experience.I also love photography and planting.</p>
        <p>My goal is to conntect people with brand and business via design. I believe a good design could increase people's interests and love to the brand or business.</p>
        <button>Download Resume</button>
      </section>

      <section className="margin-top">
        <h1 style={{fontSize:"36px"}}>Professional Skills</h1>
        <ul>
          <li className="style-grid content-margin">
            <img src={Designer} className="icon-head" alt="designer head icon" />
            <div>
              <h3>I believe creativity makes the world colorful!</h3>
              <p>I love to contribute my creativity and professional design skills in my work. I am flexible to use Adobe Illustrator, photoshop, Maya and other popular design tools to create UI design such as icons, logos and illustration. I am also professional in using Figma, Adobe XD, and Axure to create high quality Persona, journey map, wireframe and digital prototyle.</p>
              <p>Check up relative works</p>
            </div>
          </li>
          <li className="style-grid content-margin">
            <img src={Coder} className="icon-head" alt="coder head icon" />
            <div>
              <h3>I could sit all day for coding! </h3>
              <p>Coding makes my life different. I love to dive into coding world and explore any possibilities in interaction design. With the professional skills of HTML, CSS, SCSS, JS, REACT, BOOTSTRAP, other frameworks and libraries, I have hand-on experience on building user-friendly and responsive webpage for clients.</p>
              <p>Check up relative works</p>
            </div>
          </li>
          <li className="style-grid content-margin">
            <img src={UXdesigner} className="icon-head" alt="ux designer head icon" />
            <div>
              <h3>I am a UX designer with user empathy.</h3>
              <p>I believe that a good design can not ignore user experience. I am good at applying professional communication skills, user research and analytical skills in UX research. Proficiency in Figma, Adobe XD and other deisgn tools allow me to create intuitive Persona, user journey, wireframe and interative prototype, which support me in visual communication with clients. </p>
              <p>Check up relative works</p>
            </div>
          </li>
          <li className="style-grid content-margin">
            <img src={Planter} className="icon-head" alt="planter head icon" />
            <div>
              <h3>Planting and Photoshooting are my loves</h3>
              <p>I love planting and photography in my daily life. I have 20 small and big plants in my place, and I could see the numbers will go higher...Opps, sometimes you just can not help to get one more as a plant lover.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className='contact-section'>
          <h1>Want to have a chat?</h1>
          <address><a href="mailto:leahzhoulz@gmail.com" className="btn-contact">CONTACT ME</a></address>
        </section>
    </section>

    );
}
 
export default About;