import React from "react";
import "./style.css"
import Headshot from "../../assets/images/headshot.jpg"

function Header() {
    return <div id="home">
        <div className="jumbotron jumbotron-fluid shadow">
            <div className="container">
                <h1 className="display-4 justify-content-center row pageHeader">Austin Atkinson</h1>
                <h3 className="justify-content-center row pageHeader">Junior Web Developer</h3>
                <img className="row justify-content-center headshot" src={ Headshot } alt="Headshot"></img>
            </div>
        </div>
    </div>
}

export default Header