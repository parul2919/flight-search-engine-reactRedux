import React, { Component } from 'react';
import{Link} from 'react-router-dom';
class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <span className="navbar-brand d-flex align-items-center">
            Flight Search Engine
          </span>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item">
                <Link className="nav-link active" to="/" >Home</Link>
              </li>
            {console.log(this.props.openModal)}
              <li className="nav-item">
                <span className="nav-link ml-4" onClick={this.props.openModal}>Login</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-4" to="/flightPage">Flights</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-4" to="/Cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
    </header>  
    );
  }
}

export default Header;


