import React from 'react';
import './hero-section.styles.scss';

import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    return (
        <div id='Home' className='hero-container'>
            <div className='hero-section'>
            </div>

            <div className="hero-overlay">
            </div>

            <div className="hero-content">
                <h1 className='hero-title'>
                    Hi, I'm Khalid
                </h1>

                <h2 className="hero-description">
                    A Web Developer & Front-End Enthusiast
                </h2>
            </div>

            <Link 
                className="nav-link" 
                to="About" 
                smooth={true} 
                duration={100} 
            >
                <FontAwesomeIcon className='fa-down' icon={faAngleDown} />
            </Link>
        </div>
    );
}

export default HeroSection;
