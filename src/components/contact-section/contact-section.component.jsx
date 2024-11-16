import React from 'react';
import './contact-section.styles.scss';
import { SectionTitle } from '../../constants/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ContactSection() {
    return (
        <div className='contact-section' id='Contact'>
            <SectionTitle 
                title='what you can do'
            />

            <FontAwesomeIcon className='fa-paperplane' icon={faPaperPlane} />

            <h2 className="contact-section-phrase">
                Get in touch and let's connect! I'm always available and eager to hear from you.
            </h2>

            <a href="mailto:khalid.work97@gmail.com" className='email-button'>Say Hello</a>
        </div>
    );
}

export default ContactSection;
