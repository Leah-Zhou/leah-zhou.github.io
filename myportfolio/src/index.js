import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './style.css';
import Nav from './components/nav';
import reportWebVitals from './reportWebVitals';
import Title from './components/title';

function Page() {
  return (<div>
    <Nav />
    <Title />
  </div> )
}

ReactDOM.render(<Page />, document.getElementById('root'));

reportWebVitals();
