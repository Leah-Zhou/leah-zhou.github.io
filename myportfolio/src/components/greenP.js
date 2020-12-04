import React from 'react';
import ReactPlayer from 'react-player/youtube';
import HeroGreenP from './imgs/greenPshowcase.png';
import Research from './imgs/GreenP-research post-finding.png';
import UserFlow from './imgs/green p parking user flow_before.jpg';
import PersonaJ from './imgs/GreenP-jenny persona.png';
import PersonaS from './imgs/GreenP-steve persona.png';
import JourneyJ from './imgs/GreenP-user journey Jenny.png';
import JourneyS from './imgs/GreenP-user journey Steve.png';
import Comparation from './imgs/green p user flow comparation.jpg';
import PlanFile from './files/usability test plan for Green P appliaction.pdf'
import Poster from './files/Green P - Reseach Poster.pdf';




const GreenP = () => {
  const imgSize ={width:"100%", maxWidth:"750px"}
  const contentWidth ={width:"100%", maxWidth:"800px", textAlign:"center"}
  const alignLeft ={textAlign:"left", lineHeight:"1.6", fontWeight:"300"}

  return ( 
    <div className="project-container">
    <section>
      <div className="project-title">
        <h1>UX Redesign Project</h1>
        <h2 style={{fontSize:"21px", fontWeight:'400'}}>Green P Parking App</h2>
      </div>
      <img src={HeroGreenP} alt="Green P application" style={{width:"100%", maxWidth:"800px"}}/>
    </section>

    <section style={contentWidth}>
      <h1>Project Introduction</h1>
      <p>
      The Green P application from the Toronto Parking Authority is an application that assists users to find and pay for their parking spots in Toronto through mobile devices. This project is going to evaluate the efficiency of the searching functions and accessing parking information in the application, identify the potential design problems  and redesign the application to improve the efficiency of searching function. 
      </p>
      <h3>Goal</h3>
      <p>The goal of the project is improving the efficiency and users satisfaction of the application. </p>
    </section>

    <section style={contentWidth}>
      <h3>1.  WHAT ARE THE PROBLEMS OF USABILITY?</h3>
      <h4>-  USER RESEARCH</h4>
      <p> A user research is an effective way to evaluate the efficiency of the application with its searching and accessing information functions.  The usability test in this research is to let target users use the application to accomplish certain tasks, which includes searching parking spots and accessing needed parking information.</p>
      <div>
      <a className="link-btn" href={PlanFile} download>Usability Test Plan</a>
      <a className="link-btn" href={Poster} download>Research Poster</a>
      </div>
      <p>Based on the data analysis collected from the usability test, here are the conclusions of the research.</p>
      <ol style={alignLeft}>
        <li>1. The efficiency of searching function is below high level based on the reviews from participants. </li>
        <li>2. Accessing the parking information is not easy, especially when finding available parking spots and comparing prices. ​​​​​​​</li>
        <li>
          3.Searching function is not accessible intuitively​​​​​​​. 
        </li>
        <li>4. Complicated and repeated user flows in accessing parking information.</li>
        <li>5. Font size of the information is too small to read.</li>
        <li>6. Overwhelming information packed in one page is not readable. ​​​​​​​​​​​​​​</li>
      </ol>
      <div>
        <img src={Research} alt="research poster" style={{width:"100%",maxWidth:"1100px"}} />
        <img src={UserFlow} alt="user flow" style={{width:"100%",maxWidth:"1100px"}} />
     </div>
    </section>

    <section style={contentWidth}>
      <h3>Persona and Journey Map</h3>
      <p>To better present the findings of the research, I came up with two persona Jenny and Steven, who are representing two different groups of target users and their pain points while they are using the Green P parking application.</p>
      <div>
        <div>
        <img src={PersonaJ} alt="persona" style={imgSize} />
        <img src={JourneyJ} alt="user journey map" style={imgSize} />
        </div>
        <div>
        <img src={PersonaS} alt="persona" style={imgSize} />
        <img src={JourneyS} alt="user journey map" style={imgSize} />
        </div>
      </div>
    </section>

    <section style={contentWidth}>
      <h3>2. HOW TO SOLVE THESE PROBLEMS? </h3>
      <h4>UX Challenges:</h4>
      <p>The main challenges are to simplify the user flow in searching parking, and making overwhelming parking information more accessible and readable.</p>
      <h4>Solutions:</h4>
      <p>To solve the UX challenges, I applied different design ways to approach the problems.  </p>
      <ol style={alignLeft}>
        <li>1. Search function is redesigned intuitively on the home page, so users could approach it right on the first sight.</li>
        <li>2. Important parking information is visual on the map page, which help simplify the user flows of accessing information.</li>
        <li>3. Comparable information are distinguished with different colors, which faster the process of selecting parking spots.</li>
        <li>4. Font size of the information is adjusted to the readable size. </li>
      </ol>
      <img src={Comparation} alt="user flow comparation" style={imgSize} />
      <div className="video-wrapper">
       <ReactPlayer className="video" url='https://youtu.be/jgZ0DMxPxjM' width="100%" height="100%" controls /> 
      </div>
      <a className="link-btn" href="https://xd.adobe.com/view/a9cd8f94-f88f-457b-4137-37992f784579-dffc/" target="_blank">Try Prototype</a>
    </section>
   </div>

   );
}
 
export default GreenP;