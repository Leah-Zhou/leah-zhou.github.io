import React from 'react';
import Phone from './imgs/phoneImg.png';
import ShowCase from './imgs/showCase.png';

const Content = () => {


  return ( 
  <div>
    <ul className="container">
      <li>
        <h3 className="project-title">GREEN P PARKING REDEIGN PROJECT</h3>
        <section>
        <img className="phone" src={Phone} alt="phone" />
        <img className="show-case" src={ShowCase} alt="green p showcase" />
        </section>
      
      </li>
      <li>
      <h3 className="project-title">GREEN P PARKING REDEIGN PROJECT</h3>
      <section>
        <img className="phone" src={Phone} alt="phone" />
        <img className="show-case" src={ShowCase} alt="green p showcase" />
        </section>
      </li>
    </ul>
    <ul>
    </ul>
  </div> );
}
 
export default Content;