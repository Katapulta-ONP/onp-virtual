import React from 'react';
import {Button} from 'react-bootstrap'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as ROUTES from './utiles/ConfigNavbar'

import Pensionista from './components/userType/pensionista/pensionista'
import NoPensionista from './components/userType/noPensionista/noPensionista'
import Home from './components/home/home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.INI} component={Home}/>
            <Route path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.SOY_PENSIONISTA} component={Pensionista}/>
            <Route path={ROUTES.NO_SOY_PENSIONISTA} component={NoPensionista}/>
        </Switch>
    </BrowserRouter>    
  );
}

export default App;
