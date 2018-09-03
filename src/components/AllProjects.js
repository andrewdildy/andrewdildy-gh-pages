import React from 'react';
import {Link} from 'react-router-dom';
import ProjectsAPI from '../projectsAPI.js';
import '../assets/styles/AllProjects.css';
const AllProjects = () => (
    <div className='projects'>
        <div className='projects-box'>
            {
                ProjectsAPI.all().map( project => (
                    <div className='project-tile' key={project.name}>
                        <div className='content'>
                            <img src={project.images[0]}/>
                            <div className='project-link'>
                                <Link to={`/projects/${project.name}`}>{project.name}</Link>
                            </div>
                            <p>{project.description}</p>
                            <ul className='details'>
                                <li>{project.type}</li>
                                <li>{project.platform}</li>
                                <li className='date'>{project.date}</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default AllProjects;