import React from "react";
import Project from "../../components/Project"


function Projects() {
    return <div id="projects" class="container">
        <h1>My Projects</h1>
        <div class="container projects">
            <h2 class="projects-carousel"> Projects </h2>
            <div class="portfolio col-12"></div>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Project 
                        src="https://i.ibb.co/0Myp7Qx/logo-final.png"
                        name="Techpedia"
                        href="https://kevinkyle4.github.io/techpedia-/">
                        </Project>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/passwordgeneratorimage.jpg" class="d-block w-100 carousel-image"
                            alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5><a href="https://austinatkinson93.github.io/PasswordGenerator/">Password Generator</a>
                            </h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/quizimage.jpg" class="d-block w-100 carousel-image" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5><a href="https://austinatkinson93.github.io/TheQuiz/">The Quiz</a></h5>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
}

export default Projects;