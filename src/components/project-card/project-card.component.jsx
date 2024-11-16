import React from 'react';
import './project-card.styles.scss';

function ProjectCard({ project_image, project_title, live_url, source_url }) {
    return (
        <div className='project'>
            <div className="project-main-container">
                <div className="project-image-container">
                    <img src={project_image} alt={project_title} className="project-image" />
                </div>

                <a href={live_url} target='_blank' rel='noreferrer'>
                    <button className='live-site-url' type="button">View Site</button>
                </a>

                <a href={source_url} target='_blank' rel='noreferrer'>
                    <button className='source-url' type="button">View Source</button>
                </a>
            </div>

            <h1 className="project-title">{project_title}</h1>
        </div>
    );
}

export default ProjectCard;
