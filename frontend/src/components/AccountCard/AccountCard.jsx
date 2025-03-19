import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './accountcard.scss';

const AccountCard = ({ title, amount, description, buttonText, onButtonClick }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button text={buttonText} className="transaction-button" />
      </div>
    </section>
  );
};

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AccountCard;
