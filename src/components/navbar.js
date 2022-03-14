import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info navbar-fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>Count U'r</b>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/bank">
                  Bank Installment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bmi">
                  BMI
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/final">
                  Final Price
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Number Conversion
                </Link>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item text-white" to="/binary">
                      Binary Number Conversion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/octal">
                      Octal Number Conversion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/decimal">
                      Decimal Number Conversion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/hexadecimal">
                      Hexadecimal Number Conversion
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}