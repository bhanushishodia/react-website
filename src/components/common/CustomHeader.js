import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CustomHeader.css'; // Ensure this file exists


function CustomHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null); // State to track the open submenu

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleSubMenu = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index); // Toggle submenu open/close
    };

    return (
        <header className="header d-lg-none d-sm-block d-md-none  d-block">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Toggle button for offcanvas menu (only shown on small screens) */}
                <button
                    className="navbar-toggler navbar-toggler-icon d-lg-none" // Only visible on extra-small and small screens
                    type="button"
                    onClick={toggleNav}
                    aria-controls="offcanvasNavbar"
                    aria-expanded={isNavOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Logo on the right */}
                <div className="logo text-end">
                    <a href="/">
                        <img src="/images/logo.webp" alt="Logo" className="logo" />
                    </a>
                </div>

                {/* Offcanvas Navbar (only shown on small screens) */}
                <div className={`offcanvas offcanvas-end d-lg-none d-sm-block d-md-none  d-block ${isNavOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset me-2" onClick={toggleNav} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => toggleSubMenu(0)}>Solution</a>
                                <ul className={`submenu ${openSubMenu === 0 ? 'd-block' : ''}`}>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Solution 1</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Solution 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => toggleSubMenu(1)}>Features</a>
                                <ul className={`submenu ${openSubMenu === 1 ? 'd-block' : ''}`}>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Feature 1</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Feature 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => toggleSubMenu(2)}>Integration</a>
                                <ul className={`submenu ${openSubMenu === 2 ? 'd-block' : ''}`}>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Integration 1</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Integration 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => toggleSubMenu(3)}>Resources</a>
                                <ul className={`submenu ${openSubMenu === 3 ? 'd-block' : ''}`}>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Resource 1</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/">Sub Resource 2</a></li>
                                </ul>
                            </li>
                            <li className=" button">
                                <a className="nav-link btn btn-primary" href="/">Start a free trial</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default CustomHeader;
