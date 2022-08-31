import React, { forwardRef } from 'react'

// const About = forwardRef(() => {
//   return (
//     <div id="aboout-section">About Me</div>
//   )
// })

// eslint-disable-next-line react/display-name
const About = forwardRef((_props, ref) => {
  return (
    <div ref={ref} id="aboout-section">About Me</div>
  )
})

export default About