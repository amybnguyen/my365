import React from "react";

const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top navbar-custom">
      <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><image href='images/chat-square-heart2.svg'></image></svg>
        <span className="fs-4">My365</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/home" className="nav-link" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="/projects" className="nav-link">Projects</a></li>
        <li className="nav-item"><a href="/resume" className="nav-link">Resume</a></li>
      </ul>
    </header>
  );
};

export default Navbar;
