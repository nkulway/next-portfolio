import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Projects = forwardRef((_props, projectRef) => {
  return (
    <div ref={projectRef}>
      <h1>Projects</h1>
      <p>Check out some of the stuff that Ive made</p>
    </div>
  )
})

export default Projects