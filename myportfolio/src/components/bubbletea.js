import React from 'react';
import HeroTeashop from './imgs/hero-bbteashop.png';
import PersonaOne from './imgs/persona-Kevlin.png';
import PersonaTwo from './imgs/persona-Mia.png';
import UIColor from './imgs/bbtea-color patten.png';
import UIIcons from './imgs/bbtea-icons.png';
import UIFont from './imgs/bbtea-typegraphy.png';
import Showcase from './imgs/bbtea-webdesign.png';
import StickyNote from './imgs/sticky-note.jpg';
import MindMap from './imgs/mind-map.jpg';
import MoodboardA from './imgs/moodboard-brown.png';
import MoodboardB from './imgs/moodboard-green.png';
import MoodboardC from './imgs/moodboard-pink.png';
import LogoIdeation from './imgs/bbtea-logos.png';
import AnalysisOne from './imgs/analysisone.png';
import AnalysisTwo from './imgs/analysistwo.png';
// import DesignProcess from './imgs/design process.png';



const Teashop = () => {

  const imgSize ={width:"100%", maxWidth:"500px"}

  return ( 
    <div className="project-container">
      <section>
        <div className="project-title">
          <h1>Branding and Web Design</h1>
          <h2 style={{fontSize:"21px", fontWeight:'400'}}>Unicup Bubble Teashop</h2>
        </div>
        <img src={HeroTeashop} alt="bubble teashop website" style={{width:"100%", maxWidth:"800px"}}/>
      </section>

      <section>
        <h1>Project Concept</h1>
        <p>This is a branding concept project that aims at create a local bubble teashop brand and promote the brand with its website. The research shows that most of the local bubble teashops are popular because of their signatured drinks, special branding culture, and good customer services. Therefore, the core value of the created brand will be unique good-tasting drinks and customer-centered services.</p>
      </section>

      <section className="two-columns">
        <div>
        <h1>Users</h1>
        <p>The brand and its website are targeting on the young age group who is from 20 to 30 years old. The research shows that this group of people are the main customers in bubble teashops.Personas are representing users' characters</p>
        </div>
        <div>
          <img src={PersonaOne} alt="persona" style={imgSize} />
          <img src={PersonaTwo} alt="persona" style={imgSize}/>
        </div>
      </section>


      <section className="two-columns">
        <div>
          <img src={UIColor} alt="UI colors" style={imgSize} />
          <img src={UIFont} alt="UI typgraphy" style={imgSize}/>
          <img src={UIIcons} alt="UI icons" style={imgSize}/>
        </div>
        <div>
          <h1>UI Design</h1>
          <p>The brand primary colors symbolize fresh, energetic, good health and excitement. It could better convert the   core value into visualization to users.
          </p>
          <p>
          The icons and logo are designed with curve lines and round shapes, which represent the smooth texture of the  drinks.
          </p>
          {/* <img src={LogoIdeation} alt="logo ideation" style={imgSize}/> */}
          </div>
      </section>

      <section className="two-columns">
        <div>
        <h1>UX Design</h1>
        <p>Based on the users research and competitive analysis, the strategies for promoting the brand should include:</p>
          <ul style={{textAlign:"left", lineHeight:"1.6", fontWeight:"300"}}>
            <li>Encourage social interaction with users</li>
            <li>Promote time senstive deals</li>
            <li>Testimonials and feedbacks</li>
          </ul>
          <a href="https://www.figma.com/file/KzuUiJnLA5z8AYxuiF74uj/bubble-tea-prototype?node-id=0%3A1"  target="_blank">Try Template</a>
          <h4>Interactive website  -  Coming Soon</h4>
        </div>
      
        <div>
        <img src={Showcase} alt="web design show case" style={{maxWidth:'550px'}}/>
        </div>
      </section>


      <section>
      <h1>Challenges and Approach</h1>
        <div className="two-columns">
          <div>
          <h3>How to come up an impressive brand</h3>
          <p>In this project, how to narrow down the brand concept for a local bubble teashop is one of the challenges I  was facing. To achicve that, I start brainstorming with sticky notes and drawing my mind map based on the reseach  information, and it helps me come up with various ideas.</p>
          <p>The next step I tried was pinning out better ideations with feedbacks.Then I start to develop the brand name,  moodboards, logos and UI kit with selected key words.</p>
        </div>
        <div>
          <img src={StickyNote} alt="sticky notes" style={{maxWidth:'300px'}}/>
          <img src={MindMap} alt="mind map" style={{maxWidth:'300px'}}/>
        </div>
        <div className="in-row" style={{gridColumn:'1/3'}}>
           <img src={MoodboardA} alt="moodboard" style={{maxWidth:'300px'}}/>
          <img src={MoodboardB} alt="moodboard" style={{maxWidth:'300px'}}/>
          <img src={MoodboardC} alt="moodboard" style={{maxWidth:'300px'}}/> 
        </div>
      </div>

        <div className="two-columns" style={{marginTop:'80px'}}>
          <div>
          <h3 className="project-title">How to promote the brand in the website</h3>
          <p>Contents are the soul of the webstie. Attractive contents could promote the brand effectively. To figure out the solution, I began a competitive website analysis of the competitors. By analysing their website contents, marketing strategies, and social media platforms, I found out users are more interesting with the contents assoicated with product qualitiy, product appearance, brand reputation, promotion and deals. Therefore, the webstie content will be more focusing on demonstrating the high-quality materials and customers feedbacks.To encorage users' interaction with the brand, the website also provide the connection the other social media platforms such as Instagram.</p>
          </div>

          <div>
            <img src={AnalysisOne} alt="competitive analysis" style={imgSize}/>
            <img src={AnalysisTwo} alt="competitive analysis" style={imgSize}/>
          </div>
        </div>
     </section>

    </div>
   );
}
 
export default Teashop;