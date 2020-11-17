import React from 'react';
import Phone from './imgs/phoneImg.png';
import ShowCase from './imgs/showCase.png';

const Content = () => {


  return ( 
  <div>
    <ul className="container">
      <li>
      <img className="phone" src={Phone} alt="phone" />
      <img className="show-case" src={ShowCase} alt="green p showcase" />
      <h3 className="project-title">GREEN P PARKING REDEIGN PROJECT</h3>
      </li>
      <li>
      <img className="phone" src={Phone} alt="phone" />
      <img className="show-case" src={ShowCase} alt="green p showcase" />
      <h3 className="project-title">GREEN P PARKING REDEIGN PROJECT</h3>
      </li>
    </ul>
    <ul>
    </ul>
  </div> );
}
 
export default Content;