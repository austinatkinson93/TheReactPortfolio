import React from "react";
import "./style.css";

import { HashLink as Link } from 'react-router-hash-link';


function Navigation() {

    // function onLinkClick ({ target }) {
    //     if (!target.className.includes("active")){
    //         target.className.add("active")
    //     }
    // }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto links">
                <li className="nav-item active">
                    <Link smooth className="nav-link" to="/#home">Home </Link>
                </li>
                <li className="nav-item">
                    <Link smooth className="nav-link" to="/#aboutme">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link smooth className="nav-link" to="/#projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>

            <ul class="navbar-nav mr-auto navbar-links col-2">
                <li class="text-center nav-item" id="socialIcon">
                    <a href="https://www.linkedin.com/in/austin-atkinson1993/" target="_blank"><img
                        src="assets/images/icons8-linkedin-50.png" width="40" height="40"
                        alt="LinkedIn Icon"></img></a>
                    </li>
                    <li class="text-center nav-item " id="socialIcon">
                        <a href="https://github.com/austinatkinson93" target="_blank"><img
                            src="assets/images/icons8-github-48.png" width="40" height="40"
                            alt="GitHub Icon"></img></a>
                    </li>
                </ul>
             </div>
        </nav>

    


}

export default Navigation;
