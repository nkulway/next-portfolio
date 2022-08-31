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
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log("works");
  };

  return (
    <>
      <Head>
        <title>Nick Kulway</title>
        <meta name='description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Nav /> */}
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
              <li onClick={handleClick}>About</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.greenLine}></div>
          <div className={styles.metalLine}></div>
        </div>
      </nav>
      <Main ref={ref}/>
    </>
  );
}
