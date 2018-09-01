import React from 'react';
import '../assets/styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
);

export default App;
