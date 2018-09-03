import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllProjects from './AllProjects';
import Project from './Project';
import Nav from "./Nav";

const Projects = () => (
    <div>
        <Nav active={'PROJECTS'}/>
        <Switch>
            <Route exact path='/projects' component={AllProjects}/>
            <Route path='/projects/:name' component={Project}/>
        </Switch>
    </div>
);

export default Projects;