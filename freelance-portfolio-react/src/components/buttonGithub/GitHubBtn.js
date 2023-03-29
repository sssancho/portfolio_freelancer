import React from 'react'

import gitHubIcon from './../../img/icons/gitHub-black.svg';
import './../../styles/main.css'

const GitHubBtn = (props) => {
  return (
    <a href={props.link} className='btn-outline'>
      <img src={gitHubIcon} alt='' />
      GitHub repo
    </a>
  );
}

export default GitHubBtn