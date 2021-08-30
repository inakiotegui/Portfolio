import React from 'react'
//import {Container, Grid} from '@material-ui/core'
import {Route, BrowserRouter } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About'
import Proyects from './Components/Proyects/Proyects'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/proyects' component={Proyects} />
    </BrowserRouter>
  );
}

export default App;
