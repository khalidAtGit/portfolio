import React from 'react';
import './skill.styles.scss';

function Skill({icon, title}) {
    return (
        <div className="skill-container">
            {title === 'GoogleCloud' ? 
                <a href="https://www.cloudskillsboost.google" target='_blank' rel='noreferrer' >
                    <img src={require(`../../../public/assets/icons/${icon}`)} alt={title} className="skill-icon" />
                </a> :
                <img src={require(`../../../public/assets/icons/${icon}`)} alt={title} className="skill-icon" />
            }
        </div>
    );
}

export default Skill;
