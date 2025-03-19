import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './login.scss';

const Login = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  return (
      <main className='main-login'>
        <section className="sign-in-content">
          <FormLogin onSubmit={handleFormSubmit} />
        </section>
      </main>
  );
};

export default Login;
