import React from 'react';
import Nav from './Nav';
import '../assets/styles/About.css';


const About = () => (
    <div>
        <Nav active={'ABOUT'} />
        <div className='about'>
            <div className='left-column'>
                <div className='content-box overview'>
                    <div className='content'>
                        <div className='title'>OVERVIEW</div>
                        {/*<img src={'/images/headshot.jpg'}/>*/}
                        <p>I'm a recent UC Berkeley graduate seeking front-end software engineering and UI/UX positions in California. I've completed extensive coursework in computer science and design. I also have experience with a variety of projects ranging from full stack web applications to mobile and web design and prototyping.</p>
                    </div>
                </div>
                <div className='content-box coursework'>
                    <div className='content'>
                        <div className='title'>COURSEWORK</div>
                        <div className='sub-section'>COMPUTER SCIENCE</div>
                        <p>Algorithms &bull; Software Engineering &bull; Databases &bull; Internet Architecture &bull; Computer Architecture &bull; Data Structures &bull; Artificial Intelligence</p>
                        <div className='sub-section'>DESIGN</div>
                        <p>User Interface Design &bull; User Experience Design &bull; Industrial Design &bull; Interface Aesthetics</p>
                        <div className='sub-section'>OTHER</div>
                        <p>Product Management &bull; Technology Entrepreneurship &bull; Cognitive Psychology &bull; Cognitive Neuroscience &bull; Behavioral Economics</p>
                    </div>
                </div>
                <div className='content-box skills'>
                    <div className='content'>
                        <div className='title'>TECHNICAL SKILLS</div>
                        <div className='sub-section'>LANGUAGES</div>
                        <p>Python &bull; JavaScript &bull; Java &bull; Ruby &bull; SQL &bull; HTML/CSS</p>
                        <div className='sub-section'>FRAMEWORKS</div>
                        <p>React &bull; Angular &bull; Vue &bull; Rails</p>
                        <div className='sub-section'>SOFTWARE</div>
                        <p>Sketch &bull; XD &bull; Illustrator &bull; inDesign &bull; Figma</p>
                    </div>
                </div>
            </div>
            <div className='right-column'>
                <div className='content-box education'>
                    <div className='content'>
                        <div className='title'>EDUCATION</div>
                        <div className='school'>
                            <div>
                                <div className='sub-title'>University of California, Berkeley</div>
                                <div>B.A., Cognitive Science and Computer Science</div>
                            </div>
                            <div className='date'>2014-2018</div>
                        </div>
                        <p>Certificate in Technology and Entrepreneurship &bull; <a href="https://alumni.berkeley.edu/community/scholarships/leadership-award">Two-time Cal Alumni Leadership Award Recipient</a></p>
                    </div>
                </div>
                <div className='content-box experience'>
                    <div className='content'>
                        <div className='title'>EXPERIENCE</div>
                        <div className='job'>
                            <div className='job-title'>
                                <div>
                                    <div className='sub-title'>Cal Alumni Association</div>
                                    <div>Intern</div>
                                </div>
                                <div className='date'>2014-2018</div>
                            </div>
                            <p>Collaborated with staff and over 700 alumni to integrate new application management software into selections process for 8,000 applicants.</p>
                            <p>Analyzed and visualized scholarship data for 700 recipients with Jupyter notebooks in order to evaluate and create new department policies.</p>
                        </div>
                        <div className='job'>
                            <div className='job-title'>
                                <div>
                                    <div className='sub-title'>Focus Life Cycle Assessment</div>
                                    <div>Software Engineer</div>
                                </div>
                                <div className='date'>2014-2018</div>
                            </div>
                            <p>Built drag and drop interface using AngularJS for Ruby on Rails application so users can easily arrange materials and manufacturing processes to create, save, and analyze complex life cycle models.</p>
                        </div>
                        <div className='job'>
                            <div className='job-title'>
                                <div>
                                    <div className='sub-title'>The Berkeley Forum</div>
                                    <div>Events Manager</div>
                                </div>
                                <div className='date'>2014-2018</div>
                            </div>
                            <p>Directed and organized campus-wide events featuring panels and talks in a variety of fields such as academia, politics, tech, entertainment, and art.</p>
                            <p>Managed all aspects of events from inception to day of execution and coordinated venues, security, and logistics with university administration.</p>
                        </div>
                        <div className='job' style={{border: 0, marginBottom: 0, paddingBottom: 0}}>
                            <div className='job-title'>
                                <div>
                                    <div className='sub-title'>UC Berkeley</div>
                                    <div>CS 61B Lab Assistant</div>
                                </div>
                                <div className='date'>2014-2018</div>
                            </div>
                            <p>Taught students objected-oriented program design, implementation of graph and search algorithms, and data structure usage (hash maps, trees, heaps, linked lists).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;