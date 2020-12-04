import React,{useState}from 'react';
import WatchOutline from './imgs/watch-closeshot-outline.jpeg';
import HeroWatch from './imgs/watch-closeshot.jpeg';
import WatchCrownOutline from './imgs/watch-crown-outline.jpg';
import WatchCrown from './imgs/watch-crown.jpg';
import WatchGear from './imgs/watch-gear.jpg';
import WatchGearOutline from './imgs/watch-grear-outline.jpg';
import WatchInsideOutline from './imgs/watch-side-outline.jpg';
import WatchInside from './imgs/watch-side.jpg';
import WatchLayout from './imgs/3d-layout.PNG';
import WatchFraming from './imgs/3d-framing.PNG';
import WatchPorcess from './imgs/3d-process.PNG';
import ReactPlayer from 'react-player/youtube';

const Watch = () => {

  const imgSize ={width:"100%", maxWidth:"500px"}
  const heroImg={width:"80vw", maxWidth:"500px", margin:"1em"}
  const contentWidth ={width:"100%", maxWidth:"700px", textAlign:"center"}

  const [watchThumbnails]=useState([{imgOne:HeroWatch,keyOne:"herowatch",altOne:"watch",imgTwo:WatchOutline,keyTwo:" outline", altTwo:" outline"},
  {imgOne:WatchCrown,keyOne:"crown",altOne:"crown",imgTwo:WatchCrownOutline,keyTwo:"Crown Outline", altTwo:" Crown Outline"},
  {imgOne:WatchGear,keyOne:"Gear",altOne:"Gear",imgTwo:WatchGearOutline,keyTwo:"Gear Outline", altTwo:"Gear Outline"},
  {imgOne:WatchInside,keyOne:"Inside",altOne:"Inside",imgTwo:WatchInsideOutline,keyTwo:"Inside Outline", altTwo:" Inside Outline"}])

  return (
    <div className="project-container" >
      <section className="project-title">
        <div>
        <h1>3D Product Modelling</h1>
        <h2 style={{fontSize:"21px", fontWeight:'400'}}>Classic Pocket Watch</h2>
        </div>
        <img src={WatchGear} alt="watch gear" style={{width:"100%", maxWidth:"800px"}}/>
      </section>

      <section style={contentWidth}>
        <h1>Project Introduction</h1>
        <p>This is a 3d modelling project which aims at modelling a branded pocket watch and promote the product with an advertisement</p>
      </section> 

      <section style={contentWidth}>
        <h1>Challenges and Solutions</h1>
        <h4>Challenge: Complicated Model</h4>
        <p>There are three main parts for the model process. They are the shell,the watch heart, and the UV of the watch face. To achieve the modelling goal, I started with collecting and observing pocket watch pictures in different angles. I also sketched out the model to generate the general idea of the model.</p>
        <p>During the modelling process with Maya, I divided and grouped the layers to achieve three different parts of model.</p>
        <h4>Challenge: Shots in Video</h4>
        <p>There are various shots to create a product video. To solve the problems of shots, I broke down the ideas for the shots in a storyboard. I aslo marked down the duration and descriptions for each shot, which will help my next step of creating the video.</p>
        <div>
        <img src={WatchLayout} alt="watch layer" style={imgSize}/>
        <img src={WatchPorcess} alt="watch model process" style={imgSize}/>
        <img src={WatchFraming} alt="watch video frames" style={imgSize}/>
        </div>
      </section> 

      <section style={contentWidth}>
        <h1>Product Render</h1>
        <ul>
        {watchThumbnails.map(each=>(
                <div className="icon-imgs">
                   <li key={each.keyOne} ><img src={each.imgOne} alt={each.altOne} style={imgSize} /></li>
                   <li key={each.keyTwo}><img src={each.imgTwo} alt={each.altTwo} style={imgSize} /></li>
                </div>
              ))}
        </ul>
      </section>

      <section>
        <h1>Product Advertisement Video</h1>
        <div className="video-wrapper">
          <ReactPlayer className="video" url="https://youtu.be/PYT1HSTKzgQ" width="100%" height="100%" controls/>
        </div>
      </section>
    </div>

    );
}
 
export default Watch;