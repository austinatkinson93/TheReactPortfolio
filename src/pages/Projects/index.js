import React from "react";
import Project from "../../components/Project"
import "./style.css"


function Projects() {
    return <div id="projects" className="container">
        <h1 className="projectHeader title">My Projects</h1>
        <div className="container projects">
            <div className="portfolio col-12"></div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Project
                            src="https://i.ibb.co/0Myp7Qx/logo-final.png"
                            name="Techpedia"
                            href="https://kevinkyle4.github.io/techpedia-/">
                        </Project>
                    </div>
                    <div className="carousel-item">
                        <Project
                            src="assets/images/passwordgeneratorimage.jpg"
                            name="Password Generator"
                            href="https://austinatkinson93.github.io/PasswordGenerator/">
                        </Project>
                    </div>
                    <div className="carousel-item">
                        <Project
                            src="assets/images/quizimage.jpg"
                            name="The Quiz"
                            href="https://austinatkinson93.github.io/TheQuiz/">
                        </Project>
                    </div>
                    <div className="carousel-item">
                        <Project
                        src="assets/images/SamayaImage.png"
                        name="Samaya"
                        href="https://evening-beach-51558.herokuapp.com/"
                        >
                        </Project>

                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
}

export default Projects;