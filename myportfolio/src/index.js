import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './style.css';
import Nav from './components/nav';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import About from './components/about';
import Work from './components/work';
import Gallery from './components/gallery';
import Contact from './components/contact';


function Page() {
  return (<div>
  

    <Router>
     <Nav />
      <Switch>
      <Route path="/" exact component={Work} />
      <Route path="/about"  component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </Router>

  </div> )
}

ReactDOM.render(<Page />, document.getElementById('root'));

reportWebVitals();
