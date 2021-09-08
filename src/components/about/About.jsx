import React from 'react'
import './about.scss';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="left">
            <div className="imgContainer">
                <img src="./assets/about/dauth.png" alt="aboutme"/>
            </div>
            </div>
            <div className="right">
                <h1>About Me</h1>
                <p>I am frontend Developer. I am studying Bachelor of Business Information System in the final year in Brisbane, Australia.</p>
            </div>
            
        </div>
    )
}

export default About;
