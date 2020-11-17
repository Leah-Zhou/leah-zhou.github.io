import React from 'react';
import Phone from './imgs/phoneImg.png';
import ShowCase from './imgs/showCase.png';

const Content = () => {


  return ( 
  <div>
    <ul style={{marginTop:"5em"}}>
      <li>
      <img className="phone" src={Phone} alt="phone" />
      <img className="show-case" src={ShowCase} alt="green p showcase" />
      </li>
    </ul>
  </div> );
}
 
export default Content;