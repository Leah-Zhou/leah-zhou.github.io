import React from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation}from 'react-router-dom';
import About from './about';
import Work from './work';
import Gallery from './gallery';
import Teashop from './bubbletea';
import GreenP from './greenP';
import Watch from './watch';
import Survey from './survey';
import { AnimatePresence } from 'framer-motion';


const SwitchComponent = () => {
   const location =useLocation()
  return (  
    <div>
      <AnimatePresence>
    <Switch location={location} key={location.key}>
      <Route path="/" exact component={Work} />
      <Route path="/about"  component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/teashop project" component={Teashop} />
      <Route path="/greenp project" component={GreenP} />
      <Route path="/watch" component={Watch} />
      <Route path="/web survey project" component={Survey} />

      {/* <Route path="/contact" component={Contact} /> */}
    </Switch>
    </AnimatePresence>
    </div>
  );
}
 
export default SwitchComponent;