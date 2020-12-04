import React from 'react';
import HeroSurvey from './imgs/survey-hero.png';
import Prototype from './imgs/survey-prototype.png';

const Survey = () => {
   const imgSize ={width:"100%", maxWidth:"750px"}
  const contentWidth ={width:"100%", maxWidth:"800px", textAlign:"center"}
  const alignLeft ={textAlign:"left", lineHeight:"1.6", fontWeight:"300"}

  return (
 <div className="project-container">
    <section>
      <div className="project-title">
        <h1>Front End Development Project</h1>
        <h2 style={{fontSize:"21px", fontWeight:'400'}}>Online Survey Webpage Development</h2>
        <a className="link-btn" href="https://leah-zhou.github.io/web-survey/" target="_blank" >Go Web Page</a>
      </div>
      <img src={HeroSurvey} alt="online survey project" style={{width:"100%", maxWidth:"800px"}}/>
    </section>

    <section style={contentWidth}>
      <h1>Project Introduction</h1>
      <p>This is a client paid team project that aims at designing and building an online survery webpage under its offical website. The survery webpage is used to collcet participants' input for further analysis. As the participants in the survey are the people with hearing impairment, the client is expecting the simple design with videos in the survey.</p>
      <small>The web page is redeigned without the client side's information for the privacy reason. </small>
    </section>

    <section style={contentWidth}>
      <h1>Roles</h1>
      <p>In this project, I was working as a UI designer and a front end developer, who is responsible for designing the interface based on client side's design guideline, and building the interface with HTML, CSS and JS.</p>
    </section>

    <section style={contentWidth}>
      <h1>Process</h1>
      <div>
        <p>With the expectation from the client, me and my team launched a reseach on related UI templates and users' needs. With the effective information, I designed several webpage prototypes and presented to the client. Based on the feedbacks from the client, I adjusted the selected prototype to client's satisfaction.</p>
        <p>After the final version of the UI got confirmed by the client, I started to work on the front end part. In order to make the webpage responsive, I started coding it with the mobile size first. Collaborating with the project tuitor, I kept updating my code on source tree to my teammate.</p>
        <img src={Prototype} alt="survey prototype" style={imgSize} />
      </div>
    </section>

    <section style={contentWidth}>
      <h1>Challenges and Improvements</h1>
      <p>As a jounior front end developer, I learnt a lot in this project. One of the big challenges in this project to me is making each button trigglers correspondent content in the page. In this project, I used APIs to manipulate the DOM. I believe the better way to achieve it is using React to toggle different components. </p>
    </section>
    </div>
  );
}
 
export default Survey;