import React from "react";
import "./style.css"

function Header() {
    return <div id="home">
        <div className="jumbotron jumbotron-fluid shadow">
            <div className="container">
                <h1 className="display-4 justify-content-center row pageHeader">Austin Atkinson</h1>
                <h3 className="justify-content-center row pageHeader">Junior Web Developer</h3>
                <img className="row justify-content-center headshot" src="assets/images/headshot.JPG" alt="Image did not load"></img>
            </div>
        </div>
    </div>
}

export default Header