import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import About from './components/About';

export default(
    <Switch>
        <Route exact path='/' component= {App} />
        <Route path='/about' component= {About} />
    </Switch>
)