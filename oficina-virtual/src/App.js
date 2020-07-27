import React from 'react';
import {Button} from 'react-bootstrap'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as ROUTES from './utiles/ConfigNavbar'

import Pensionista from './components/userType/pensionista/pensionista'
import NoPensionista from './components/userType/noPensionista/noPensionista'
import Home from './components/home/home'

import './App.css';

import backgroundImagen from './images/others/fondo.png'

const homeStyle={
  height:`100vh`,
  margin:`0`,
  display: `flex`,
  flexDirection: `column`,
  backgroundImage:`url(${backgroundImagen})`,
  backgroundPosition:`center`,
  backgroundRepeat:`no-repeat`,
  backgroundAttachment:`fixed`,
  backgroundSize: `cover`,
}

function App() {
  return (
    <div style={homeStyle}>
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.INI} component={Home}/>
            <Route path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.SOY_PENSIONISTA} component={Pensionista}/>
            <Route path={ROUTES.NO_SOY_PENSIONISTA} component={NoPensionista}/>
        </Switch>
    </BrowserRouter>
    </div> 
  );
}

export default App;
