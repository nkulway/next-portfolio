import Head from "next/head";
import Main from "../components/Main";
import Nav from "../components/Nav";
import About from "../components/About";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import testImage from "../public/vercel.svg";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleClickToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleClickToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <>
      <Head>
        <title>Nick Kulway</title>
        <meta name='description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.lineContainer}>
          <div className={styles.navLinks}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.avatar}
                src={testImage}
                alt='A picture of Nick Kulway'
              />
            </div>
            <ul>
              <li onClick={handleClickToAbout}>About</li>
              <li onClick={handleClickToExperience}>Experience</li>
              <li onClick={handleClickToProjects}>Projects</li>
              <li onClick={handleClickToContact}>Contact</li>
            </ul>
          </div>
          <div className={styles.greenLine}></div>
          <div className={styles.metalLine}></div>
        </div>
      </nav>
      <Main ref={{
        ref1: aboutRef,
        ref2: experienceRef,
        ref3: projectRef,
        ref4: contactRef
      }} />
    </>
  );
}
