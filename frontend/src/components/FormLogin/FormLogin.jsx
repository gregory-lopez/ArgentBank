import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Form from '../Form/Form';
import Button from '../Button/Button';
import './formlogin.scss';

const FormLogin = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      await signIn(email, password);
    } catch (err) {
      setError('Email ou mot de passe incorrect.');
    }
  };

  const fields = [
    { 
      label: 'Username', 
      id: 'email',
      type: 'email', 
      value: email, onChange: (e) => setEmail(e.target.value) 
    },
    { 
      label: 'Password', 
      id: 'password', 
      type: 'password', 
      value: password, onChange: (e) => setPassword(e.target.value) },
  ];

  return (
    <div className='form-container'>
    <i className="fa fa-user-circle"></i>
    <Form 
      title="Sign In" 
      fields={fields} 
      onSubmit={handleSubmit}
      buttonText={(
        <>
          <div className="input-remember">
            <input 
              type="checkbox" 
              id='remember-me'
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <Button text="Sign In" type="submit" className="sign-in-button" />
        </>
      )}
    />
  </div>
  );
};

export default FormLogin;