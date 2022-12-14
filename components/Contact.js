/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import contactStyles from "../styles/Contact.module.css";

const Contact = forwardRef((_props, contactRef) => {
  return (
    <div ref={contactRef}>
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactContent}>
          <h1>Contact</h1>
          <p>Feel free to contact me here</p>
          <ul className={contactStyles.contactList}>
            <li>Email</li>
            <li>Phone</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Contact;
