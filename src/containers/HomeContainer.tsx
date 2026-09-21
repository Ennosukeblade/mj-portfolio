import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CTA_TEXT, GREETING_DESCRIPTION, GREETING_TEXT, SECTIONS_VISIBILITY } from "../data/data";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-base-100 text-base-content">
      {SECTIONS_VISIBILITY.home && (
        <Hero
          image=""
          greetingText={GREETING_TEXT}
          greetingDescription={GREETING_DESCRIPTION}
          buttonText={CTA_TEXT}
        />
      )}
      {SECTIONS_VISIBILITY.experience && <ExperienceContainer />}
      {SECTIONS_VISIBILITY.projects && <ProjectsContainer />}
      {SECTIONS_VISIBILITY.skills && <SkillsContainer />}
      {SECTIONS_VISIBILITY.contact && <ContactSection />}
      <Footer />
    </div>
  );
};

export default HomeContainer;
