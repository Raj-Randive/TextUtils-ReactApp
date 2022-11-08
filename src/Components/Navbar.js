// type rfc to get --> React function based component
// type impt to get --> PropTypes in React 

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (

    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">

          <Link className="navbar-brand" to="#">{props.title}</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              {/* ******************************************* SWITCH *************************************************** */}
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>

            </form>
          </div>
        </div>
      </nav>

    </div>

  );
}

/****************************************************************************************************/
// This thing keeps a track if we are making any mistake while passing any props. Like in future if by-mistake we passed an object instead of a string. 

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// isRequired --> Throws an error if we donot pass any props or any kind of "Title" or "About Text". 
// Matlab agar hum chahte hai ki hamre props empty na rahe then insert this "isRequired" thing to ensure if we have passed it or not 

/****************************************************************************************************/

Navbar.defaultProps = {
  title: 'Set-Title-here',
  aboutText: 'About-Text-here'
}