import React from 'react';

import project1_big from '../img/projects/02-big.jpg';
import GitHubBtn from '../components/buttonGithub/GitHubBtn';

const Project = () => {
  return (
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={project1_big} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <GitHubBtn link="http://github.com" />

            </div>
        </div>
  )
}

export default Project