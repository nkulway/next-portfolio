/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

const Contact = forwardRef((_props, contactRef) => {
  return (
    <div ref={contactRef}>
      <h1>Contact</h1>
      <p>Feel free to contact me here</p>
    </div>
  )
})

export default Contact