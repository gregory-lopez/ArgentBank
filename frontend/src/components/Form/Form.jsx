import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Form = ({ title, fields, onSubmit, buttonText }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form-title">{title}</h1>
      
      {fields.map(({ label, id, type, value, onChange, disabled }) => (
        <div key={id} className="input-wrapper">
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
      ))}

      {typeof buttonText === 'string' ? (
        <button type="submit" className="sign-in-button">{buttonText}</button>
      ) : (
        buttonText
      )}
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
