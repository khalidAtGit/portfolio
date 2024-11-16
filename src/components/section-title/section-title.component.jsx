import React from 'react';
import './section-title.styles.scss';

function SectionTitle({ title }) {
    return (
        <h1 className='section-title'>
            {title}
        </h1>
    )
}

export default SectionTitle;
