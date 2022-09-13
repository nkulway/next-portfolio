import React, { forwardRef } from 'react'
import projectStyles from '../styles/Projects.module.css'

// eslint-disable-next-line react/display-name
const Projects = forwardRef((_props, projectRef) => {
  return (
    <div ref={projectRef}>
      <h1>Projects</h1>
      <p>Check out some of the stuff that Ive made</p>
      <div className='projectStyles.cardSection'>
        <div className='projectStyles.cardContainer'>
          <div className='projectStyles.firstCard'>
            <h2>Project Number 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Projects