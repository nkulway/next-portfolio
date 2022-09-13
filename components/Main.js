/* eslint-disable react/display-name */
import mainStyles from "../styles/Main.module.css";
import React, { forwardRef } from "react";
import About from "./About";
import Link from "next/link";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = forwardRef((_props, ref) => {
  const { ref1, ref2, ref3, ref4 } = ref;
  return (
    <main className={mainStyles.main}>
      <div className={mainStyles.mainContent}>
        <About ref={ref1} id='about' />
        <Experience ref={ref2} />
        <Projects ref={ref3} />
        <Contact ref={ref4} />
      </div>
    </main>
  );
});

export default Main;
