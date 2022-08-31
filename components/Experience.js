import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Experience = forwardRef((_props, experienceRef) => {
  return (
    <div ref={experienceRef}>Experience</div>
  )
})

export default Experience