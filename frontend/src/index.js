import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import AppRoutes from './routes/AppRoutes.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
