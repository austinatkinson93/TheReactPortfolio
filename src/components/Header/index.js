import React from "react";
import "./style.css"

function Header() {
    return <div id="home">
        <div class="jumbotron jumbotron-fluid">
            <div class="container yeah">
                <h1 class="display-4 justify-content-center row pageHeader">Austin Atkinson</h1>
                <h3 class="justify-content-center row pageHeader">Web Developer</h3>
                <img class="row justify-content-center headshot" src="assets/images/headshot.JPG" alt="Image did not load"></img>
            </div>
        </div>
    </div>
}

export default Header