/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

const Contact = forwardRef((_props, contactRef) => {
  return (
    <div ref={contactRef}>Contact</div>
  )
})

export default Contact