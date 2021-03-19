import React from 'react';
import Intro from './components/Intro';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import ProjectContainer from './components/ProjectContainer';
import Projects from './projects.json';

const Portfolio = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <ProjectContainer>
        <ProjectCard projects={Projects} />
      </ProjectContainer>
    </>
  );
};

export default Portfolio;
