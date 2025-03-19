import React from 'react';
import PropTypes from 'prop-types';
import './hero.scss';

const Hero = ({ title, subtitles, description }) => {


  return (
    <div className="hero">
      <div className="hero-content">
        <h2 className="sr-only">{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p key={index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
