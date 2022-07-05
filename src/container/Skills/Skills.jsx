import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My Special Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills
            .filter((skill) => skill.level === 'Advansed')
            // eslint-disable-next-line
            .sort((a, b) => ((a._updatedAt < b._updatedAt) ? -1 : ((a._updatedAt > b._updatedAt) ? 1 : 0)))
            .map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
      <h3 className="head-text head-text-2">Basic Skills</h3>
      <div className="app__skills-container app__skills-container-2">
        <motion.div className="app__skills-list">
          {skills
            .filter((skill) => skill.level === 'Basic')
            // eslint-disable-next-line
            .sort((a, b) => ((a._updatedAt < b._updatedAt) ? -1 : ((a._updatedAt > b._updatedAt) ? 1 : 0)))
            .map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex">
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
