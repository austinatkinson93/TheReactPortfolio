import React from "react";
import "./style.css"


function AboutMe() {
    return <div class="container" id="aboutme" >
        <article>
            <h1 class="title aboutMeHeader"  >About me</h1>
            <p class="aboutMeText">Enthusiastic Full Stack Web Developer in training, currently
            enrolled in the Georgia Tech
            Coding Bootcamp. After graduating in 2016 with my bachelors in Biochemistry from Georgia
            Southern University, and since have worked in various labs around the country. However, with my
            new found passion for coding I am excited to join a web development team and be a part of
        growing and dynamic field.</p>
            <p class="aboutMeText">Hardworking, self-motivated individual with a passion for coding and web development, I am
            enlivened to learn as much as I can in hopes of one day opening and running my own
        gaming center and breaking into the world of E-sports.</p>
            <hr />
            <h1 class="title">Skills</h1>
            <div class="skills">
                <h3>Front-End</h3>
                <ul>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>HTML, CSS</li>
                </ul>
            </div>
        </article>
        <hr />
    </div>
}

export default AboutMe