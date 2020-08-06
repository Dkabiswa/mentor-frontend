import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">STARTUP MART</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fa fa-home"></i>
          <span className="sr-only">(current)</span>
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/messages">
          <i className="fa fa-envelope-o">
            <span className="badge badge-danger">11</span>
          </i>
          MESSAGES
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-bell">
            <span className="badge badge-info">11</span>
          </i>
          NOTIFICATIONS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-user-circle-o"></i>
          DAVIS
        </a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header;