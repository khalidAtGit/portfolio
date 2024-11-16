import React from 'react';
import './about-section.styles.scss';
import { SectionTitle } from '../../constants/index';

function AboutSection() {
    return (
        <div className='about-section' id='About'>
            <SectionTitle 
                title='who i am'
            />

            <p className="about-description">
            Hello there! I'm a 26-year-old guy with a love for web development. I enjoy creating beautiful and accurate websites that you can see and interact with. Learning about new technologies excites me, and I always keep an eye out for the latest trends.
            <br />
            <br />
            Welcome to my portfolio website, where I share my passion for both web development and art!
            </p>
        </div>
    );
}

export default AboutSection;
