import React from "react";
import "./style.css"


function AboutMe() {
    return <div className="container" id="aboutme" >
        <div className="buffer"></div>
        <article>
            <h1 className="title aboutMeHeader"  >About me</h1>
            <p className="aboutMeText">Enthusiastic Full Stack Web Developer in training, currently
            enrolled in the Georgia Tech
            Coding Bootcamp. After graduating in 2016 with my bachelors in Biochemistry from Georgia
            Southern University, and since have worked in various labs around the country. However, with my
            new found passion for coding I am excited to join a web development team and be a part of
        growing and dynamic field.</p>
            <p className="aboutMeText">Hardworking, self-motivated individual with a passion for coding and web development, I am
            enlivened to learn as much as I can in hopes of one day opening and running my own
        gaming center and breaking into the world of E-sports.</p>
            <br />
            <h1 className="title">Skills</h1>
            <div className="skills container">
                <div className="row">
                    <div className="col list">
                        <h3>-Front-End-</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML, CSS</li>
                        </ul>
                    </div >
                    <div className="col list">
                        <h3>-Backend-</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>MySQL/Sequelize</li>
                        </ul>
                    </div>
                    <div className="col list">
                        <h3>-Libraries-</h3>
                        <ul>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col list">
                        <h3>-Dev Tools-</h3>
                        <ul>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Heroku</li>
                        </ul>
                    </div >
                    <div className="col list">
                        <h3>-Fundamentals-</h3>
                        <ul>
                            <li>APIs</li>
                            <li>JSON</li>
                            <li>AJAX</li>
                            <li>Data Structures</li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
        <br />
    </div>
}

export default AboutMe