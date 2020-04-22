import React from "react";
import "./style.css";


function Navigation() {

    // function onLinkClick ({ target }) {
    //     if (!target.className.includes("active")){
    //         target.className.add("active")
    //     }
    // }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto links">
                    <li className="nav-item active">
                        <a className="nav-link"  href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="#">Contact</a>
                    </li>
                   
                </ul>
             </div>
        </nav>

    


}

export default Navigation;
