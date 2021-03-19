import React, { useState, useEffect } from 'react';
import './index.css';

function Intro() {
  const [jobTitle, setJobTitle] = useState('...');

  useEffect(() => {
    const titles = [
      'Back-End Engineer',
      'Web Developer',
      'Musician',
      'Photographer',
      'Full Stack Developer',
      'Software Engineer',
      'Front-End Engineer'
    ];
    const randomTitle = Math.floor(Math.random() * titles.length);

    const interval = setInterval(() => {
      if (jobTitle === titles[randomTitle]) {
        setJobTitle('...');
      }
      setJobTitle(titles[randomTitle]);
    }, 3500);
    return () => clearInterval(interval);
  }, [jobTitle]);

  return (
    <div id="hero" className="jumbotron container-fluid">
      <div className="container ">
        <h1 className="animation">
          Hello, My name is Israel Guillermo.
          <br />I am a <span>{jobTitle}.</span>
        </h1>
        <a href="#about" className="">
          <button id="see-more" className="btn btn-outline-secondary slide-in ">
            SEE MORE
          </button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
