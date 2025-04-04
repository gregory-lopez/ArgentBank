import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import "./header.scss";
import argentBankLogo from "../../assets/images/argentBankLogo.png";

const Header = () => {
  const { isLoggedIn, signOut } = useAuth();
  const { user } = useUserData();

  return (
    <header className="main-header">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="main-nav">
        {isLoggedIn ? (
          <>
            <NavLink 
            to="/profile" 
            className="main-nav-item"
            >
              <i className="fa fa-user-circle"></i>
              {user?.firstName}
            </NavLink>
            <NavLink
              to="/"
              className="main-nav-item"
              onClick={signOut}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "main-nav-item router-link-exact-active"
                : "main-nav-item"
            }
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
