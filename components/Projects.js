import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Projects = forwardRef((_props, projectRef) => {
  return (
    <div ref={projectRef}>Projects</div>
  )
})

export default Projects