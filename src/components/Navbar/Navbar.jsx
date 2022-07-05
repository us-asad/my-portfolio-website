import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = (state) => {
    setToggle(state);
    document.body.style.overflowY = state ? 'hidden' : 'auto';
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => toggleNavbar(true)} />
        <div className={toggle && 'app__navbar-mobile-show'}>
          <HiX onClick={() => toggleNavbar(false)} />
          <ul>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => toggleNavbar(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
