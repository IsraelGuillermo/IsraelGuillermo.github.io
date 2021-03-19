import React from 'react';
import './index.css';

function ProjectContainer(props) {
  return (
    <div id="projectContainer" className="jumbotron container-fluid ">
      <h2 className=" text-center">PROJECTS</h2>
      <div className="container">
        <div className="row mb-5">{props.children}</div>
      </div>
    </div>
  );
}

export default ProjectContainer;
