import React, { useEffect, useState } from 'react';
import './footer.styles.scss';

import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const [show, setShow] = useState(false);

    const transitionRocket = () => {
        if(window.scrollY > 600) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionRocket);
    
        return () => {
            window.removeEventListener('scroll', transitionRocket);
        }
    }, []);

    return (
        <div className='footer'>
            <div className="social-links-container">
                <a href="https://www.facebook.com/mohamma.khalid.967422" className="social-link fa-facebook" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faFacebookF} />
                </a>

                <a href="https://www.twitter.com/Khalid_At_X" className="social-link fa-twitter" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faXTwitter} />
                </a>

                <a href="https://www.instagram.com/1am_khalid" className="social-link fa-instagram" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faInstagram} />
                </a>

                <a href="https://www.github.com/khalidAtGit" className="social-link fa-github" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faGithub} />
                </a>

                <a href="https://www.linkedin.com/in/mkhalid1997" className="social-link fa-linkedin" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faLinkedinIn} />
                </a>
            </div>

            {show && <Link 
                className="footer-icon-container" 
                to="Home" 
                smooth={true} 
                duration={400} 
                offset={-50}
            >
                <FontAwesomeIcon className='fa-rocket' icon={faRocket} />

                <span className="tooltip-text">Head on top!</span>
            </Link>}

            <p className="footer-credits">
                ©Mohammad Khalid 2023
            </p>
        </div>
    );
}

export default Footer;
