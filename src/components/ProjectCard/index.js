import './ProjectCard.css';
import React from 'react';

export default function ProjectCard(props) {
  return (
    <>
      {props.projects.map((item, i) => (
        <div className="row" key={item.image}>
          <div className="col-lg-4 col-sm-12 my-5 description">
            <h3>{item.title}</h3>
            <p id='project-description'>{item.description}</p>
            <div>
              <div className="mt-5">
                <a href={item.github} target="blank">
                  <button className="btn btn-outline-secondary slide-in mr-2">
                    Github
                  </button>
                </a>
                <a href={item.deployed} target="blank">
                  <button className="btn btn-outline-secondary slide-in mr-2">
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 my-5 imgContainer">
            <img src={item.image} className="image" alt={item.title} />
            <div className="overlay">
              <div className="text">
                <h4>Technologies:</h4>
                <p>{item.technologies}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
