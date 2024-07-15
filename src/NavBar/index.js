import "./index.css";
import React, { useState, useEffect } from "react";
import { Squash as HamburgerIcon } from 'hamburger-react';
import logos from "./image/logos.png";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target.closest('.links') === null &&
        event.target.closest('.hamburger') === null
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { capture: true });
    } else {
      document.removeEventListener('click', handleClickOutside, {
        capture: true,
      });
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, {
        capture: true,
      });
    };
  }, [isOpen]);

  return (
    <div className="header">
      <nav  className="navbar">
        <div className="logo">
          <h1>INYANGE</h1>
          <img src={logos} alt="Logo" className="image"/>
        </div>

        <div className="list">
          <li><a>Home</a></li>
          <li><a>Videos</a></li>
          <li><a>Blog</a></li>
          <li><a>Podcast</a></li>
          <li><a>Resume</a></li>
          <li><a>Footer</a></li>
        </div>
      </nav>

      <div className="hambuger">
        <HamburgerIcon toggled={isOpen} size={20} toggle={handleHamburgerClick} />
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="links"
          >
            <div className="back-button" onClick={handleCloseClick}>
              <IoMdClose size={30} />
              </div>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Videos</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Podcast</a>
                </li>
                <li>
                  <a href="#">Resume</a>
                </li>
                <li>
                  <a href="#">Footer</a>
                </li>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
