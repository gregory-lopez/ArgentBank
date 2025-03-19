import React from 'react';
import PropTypes from 'prop-types';
import './featurecard.scss';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-card-image" />
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
