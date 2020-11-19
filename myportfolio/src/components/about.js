import React from 'react';
import Coding from './imgs/coding skills.svg';
import Graphic from './imgs/graphic skills.svg';

const About = () => {
   const skillsStyle ={
    width:'70%',maxWidth:"750px"
   }
  return (
    <div className="title-section"> 
      <section>
      <h1>Hi! This is Leah Zhou!</h1>
    <p>I am a front-end coder and a UX and UI designer with full passion in creating beautiful and interactive design.I also love photography and planting.</p>
      </section>
      <section className="title-section">
      <h3>Professional Skills</h3>
      <img src={Coding} alt="coding skills" style={skillsStyle}/>
      <img src={Graphic} alt="graphic skills" style={skillsStyle}/>
      </section>
    </div>

    );
}
 
export default About;