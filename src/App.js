import React from 'react'
//import {Container, Grid} from '@material-ui/core'
import {Route, BrowserRouter } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About'
import Proyects from './Components/Proyects/Proyects'
import Contact from './Components/Contact/Contact'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/proyects' component={Proyects} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}

export default App;
