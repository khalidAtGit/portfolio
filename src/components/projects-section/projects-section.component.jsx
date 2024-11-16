import React from 'react';
import './projects-section.styles.scss';
import { SectionTitle, ProjectCard } from '../../constants/index';

import { projects } from '../../constants/ProjectsList';

function ProjectsSection() {
    return (
        <div className='projects-section' id='Projects'>
            <SectionTitle 
                title="what i've done"
            />

            <div className="projects-container">
                {projects.map(project => {
                    return (
                        <ProjectCard 
                            {...project} 
                            key={project.id} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectsSection;
