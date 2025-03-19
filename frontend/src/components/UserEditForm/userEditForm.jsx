import React from 'react';
import PropTypes from 'prop-types';
import useUserEditForm from '../../hooks/useUserEditForm';
import Form from '../Form/Form';
import Button from '../Button/Button';
import './usereditform.scss'; 

const UserEditForm = ({ initialData, onCancel }) => {
  const { formData, error, handleInputChange, handleSubmit } = useUserEditForm(initialData, onCancel);

  const fields = [
    { label: 'User name :', id: 'userName', type: 'text', value: formData.userName, onChange: handleInputChange },
    { label: 'First name :', id: 'firstName', type: 'text', value: formData.firstName, disabled: true },
    { label: 'Last name :', id: 'lastName', type: 'text', value: formData.lastName, disabled: true },
  ];

  return (
    <div className="edit-form-container">
      {error && <p className="error-message">{error}</p>}

      <Form 
        title="Edit user info" 
        fields={fields} 
        onSubmit={handleSubmit} 
        buttonText={(
          <div className="button-group">
            <Button text='Save' type="submit" className="save-button" />
            <Button text="Cancel" onClick={onCancel} className="cancel-button" />
          </div>
        )}
      />
    </div>
  );
};

UserEditForm.propTypes = {
  initialData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default UserEditForm;
