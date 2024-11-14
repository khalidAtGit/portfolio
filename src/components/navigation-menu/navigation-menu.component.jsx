import React, { useContext, useEffect } from 'react';
import './navigation-menu.styles.scss';

import { Link } from 'react-scroll';
import { NavbarContext } from '../../context/navbar-context';

function useOutsideAlerter(ref) {
    const { setMenu } = useContext(NavbarContext);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function NavigationMenu() {
    const { setMenu, wrapperRef } = useContext(NavbarContext);
    useOutsideAlerter(wrapperRef);

    const hideMenu = () => {
        setMenu(false);
    }

    return (
        <div className="nav-menu" ref={wrapperRef}>
            <div className="nav-menu-links">
                <Link 
                    className="nav-menu-link" 
                    to="About" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    About
                </Link>
                <Link 
                    className="nav-menu-link" 
                    to="Skills" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    Skills
                </Link>
                <Link 
                    className="nav-menu-link" 
                    to="Projects" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    Projects
                </Link>
                <Link 
                    className="nav-menu-link" 
                    to="Contact" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    Contact
                </Link>
                </div>
        </div>
    );
}

export default NavigationMenu;
