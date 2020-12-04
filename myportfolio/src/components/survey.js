import React from 'react';
import HeroSurvey from './imgs/survey-hero.png';
import Prototype from './imgs/survey-prototype.png';
import Process from './imgs/survey-process.svg';

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
      <p>It is a client paid team project that aims at designing and building an online survey webpage under its official website. The survey webpage is to collect participants' inputs for further analysis. As the participants in the survey are people with hearing impairment, the client is expecting a simple design with videos in the survey.</p>
      <small>The web page is redeigned without the client side's information for privacy reasons. </small>
    </section>

    <section style={contentWidth}>
      <h1>Role</h1>
      <p>In this project, I was working as a UI designer and a front-end developer, who is responsible for designing the interface based on the client side's design guidelines, and building the interface with HTML, CSS, and JS.</p>
    </section>

    <section style={contentWidth}>
      <h1>Process</h1>
      <img src={Process} alt="survey process" style={imgSize} />
      <div>
        <p>With direction and requirements from the client, my team and I launched research on related UI templates and users' needs. With the information from the research, I designed several webpage prototypes and presented them to the client. Based on the feedback from the client, I adjusted the selected prototype to the client's satisfaction.</p>
        <p>After the final version of the UI got confirmed by the client, I started to work on the front end part. To make the webpage responsive, I started coding it with the mobile size first. Collaborating with the project tutor, I kept updating my code on the source tree to my teammate.</p>
        <img src={Prototype} alt="survey prototype" style={imgSize} />
      </div>
    </section>

    <section style={contentWidth}>
      <h1>Challenges and Improvements</h1>
      <p>As a junior front end developer, I learned a lot from this project. One of the challenges in this project to me is making each button triggers correspondent content on the page. In this project, I used APIs to manipulate the DOM. I believe the better way to achieve it is using React to toggle different components. </p>
      <p>The other challenge is storting data from the users'inputs. In this project, I achieved it with local storage, and reused the data for the review page.Users could review and change their answers anytime during the survey.</p>
    </section>
    </div>
  );
}
 
export default Survey;