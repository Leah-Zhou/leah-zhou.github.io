import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav';
import reportWebVitals from './reportWebVitals';

function Page() {
  return (<div><Nav />
  <button className="btn">hola</button>
  </div> )
}

ReactDOM.render(<Page />,
  document.getElementById('root')
);

reportWebVitals();
