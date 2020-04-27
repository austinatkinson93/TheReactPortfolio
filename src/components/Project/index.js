import React from "react";
import "../../pages/Projects/style.css"

function Project(props) {
    return <div className="project">
        <img src={props.src} className="d-block w-100 carousel-image projectImage"
            alt={props.name}></img>
        <div className="carousel-caption d-none d-md-block">
            <h5 className="projectName"><a href={props.href}>Project: {props.name}</a></h5>
        </div>
    </div>
}

export default Project;