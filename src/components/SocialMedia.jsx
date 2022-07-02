import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { Fiverr } from './Icons';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/us-asad">
      <BsGithub />
    </a>
    <a href="https://www.fiverr.com/asad_4">
      <Fiverr />
    </a>
    <a href="https://t.me/us_asad">
      <FaTelegramPlane />
    </a>
  </div>
);

export default SocialMedia;
