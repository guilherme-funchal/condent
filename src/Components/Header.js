import React from 'react';

export default function Header(){ 
    return (
        <div>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-dark">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true">
                            <i className="fa fa-lock" />
                        </a>

                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
        </div>

    )
}
