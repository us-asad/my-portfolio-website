import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import { images } from '../../constants';
// import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const detailsQuery = '*[_type == "details"] { "cvUrl": cv.asset->url }';

    client.fetch(detailsQuery).then((data) => {
      setDetails(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
      <div className="app__profiles">
        <div>
          <img
            src={images.coding}
            alt="Coding Gif"
          />
        </div>
        <div>
          <div>
            <h4>
              <span>Who i am</span>
              <span className="line" />
            </h4>
            <h3>About Me</h3>
            <p>I’m Asad Usmonov, a professional and talented web developer with JAM Stack development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences.</p>
            <p>I have excellent JAM Stack <a href="#skills" className="app-link">skills</a> for developing e-commerce, educational, blogging, and other websites.</p>
            <p className="mb-3">Being a diligent, hardworking, and result-oriented man, I always work towards achieving the best result on each project I lay my hands on.</p>
            {details?.length
              ? <a className="app-btn" href={`${details[0].cvUrl}?dl=`}>Download CV</a>
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
