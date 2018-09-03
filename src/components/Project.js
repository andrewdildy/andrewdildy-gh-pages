import React from 'react';
import ProjectsAPI from '../projectsAPI.js';
import {Link} from 'react-router-dom';

const Project = (props) => {
    const project = ProjectsAPI.get(props.match.params.name);
    return (
        <div>
            {project.name}
        </div>
    )
};

export default Project;

