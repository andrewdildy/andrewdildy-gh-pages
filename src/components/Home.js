import React from 'react';
import '../assets/styles/Home.css';
import headshot from '../assets/img/headshot.jpg';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='home'>
        <div className='nav-home'>
            <div className='name'>
                Andrew Dildy
            </div>
            <div className='nav-links'>
                <Link to='/about' className='nav-link'>ABOUT</Link>
                <Link to='/projects' className='nav-link'>PROJECTS</Link>
                <Link to='/contact' className='nav-link'>CONTACT</Link>
            </div>
        </div>
        <div className='content-box'>
            <div className='content'>
                <div className='text'>
                    <h2>
                        Hi, I'm Andrew.
                    </h2>
                    <p>
                        I recently graduated from UC Berkeley and am looking for careers in UI/UX and software development.
                    </p>
                </div>
                <img src={headshot}/>
            </div>
        </div>
    </div>
);

export default Home;
