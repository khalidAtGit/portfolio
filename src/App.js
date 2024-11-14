import React from "react";

import { AboutSection, ContactSection, Footer, HeroSection, Navbar, ProjectsSection, SkillsSection } from './constants/index';

export default function App() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <AboutSection />

            <SkillsSection />

            <ProjectsSection />

            <ContactSection />

            <Footer />
        </>
    );
}
