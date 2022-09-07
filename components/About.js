import React, { forwardRef } from 'react'

// const About = forwardRef(() => {
//   return (
//     <div id="aboout-section">About Me</div>
//   )
// })

// eslint-disable-next-line react/display-name
const About = forwardRef((_props, aboutRef) => {
  return (
    <div ref={aboutRef} id="aboout-section">
      <div className='about-me-container'>
        <h1>Nick Kulway</h1>
        <p>Creative problem solver who loves working with others to build things for the internet. <br/> Software development has become a pivotal part of my life, I love honing my craft and learning new methods to write great code.</p>
      </div>
    </div>
  )
})

export default About