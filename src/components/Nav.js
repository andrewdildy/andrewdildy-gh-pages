import React from 'react';
import '../assets/styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const aboutClass = (props.active === 'ABOUT') ? 'nav-link active' : 'nav-link';
    const projectsClass = (props.active === 'PROJECTS') ? 'nav-link active' : 'nav-link';
    const contactClass = (props.active === 'CONTACT') ? 'nav-link active' : 'nav-link';
    return (
        <div className='nav'>
            <Link to='/' className='name'>Andrew Dildy</Link>
            <span className='nav-links'>
                <Link to='/about' className={aboutClass}>ABOUT</Link>
                <Link to='/projects' className={projectsClass}>PROJECTS</Link>
                <Link to='/contact' className={contactClass}>CONTACT</Link>
            </span>
        </div>
    );

};

export default Nav;