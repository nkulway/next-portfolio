import Link from "next/link";
import React, { useRef, useState } from "react";
import navStyles from "../styles/Nav.module.css";
import Main from "./Main";
import Image from "next/image";
import profileImage from "../public/profilePicture.jpeg";


const MENU_LIST = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickToAbout = () => {
    setNavActive("")
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToExperience = () => {
    setNavActive("")
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToProjects = () => {
    setNavActive("")
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToContact = () => {
    setNavActive("")
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <nav className='nav'>
          <Link href={"/"}>
            <a onClick={() => setActiveIdx(0)}>
              <h1 className='logo'>CodingWithNick</h1>
            </a>
          </Link>

          <div
            onClick={() => setNavActive(!navActive)}
            className='nav__menu-bar'
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            <div className={navStyles.navLinks}>
              <div className={navStyles.imageWrapper}>
                <Image
                  className={navStyles.avatar}
                  src={profileImage}
                  alt='A picture of Nick Kulway'
                />
              </div>
              <ul className={navStyles.linkContainer}>
                <li onClick={handleClickToAbout}>About</li>
                <li onClick={handleClickToExperience}>Experience</li>
                <li onClick={handleClickToProjects}>Projects</li>
                <li onClick={handleClickToContact}>Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div id={navStyles.mobileMain}>
        <Main
          ref={{
            ref1: aboutRef,
            ref2: experienceRef,
            ref3: projectRef,
            ref4: contactRef,
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
