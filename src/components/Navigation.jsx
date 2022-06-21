import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from './Logo.jpeg'

function Navigation() {
  return (
    <div className="navigation fixed-top">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div><img src={window.location.origin + '/public/JoyAndFellowshipLogo.jpeg'} alt="" /></div>
          <NavLink className="navbar-brand " to="/">
            <img src={window.location.origin + '/public/JoyAndFellowshipLogo.jpeg'} alt="" />
            Peace and Joy Fellowship Church
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sermons">
                  Sermons
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;