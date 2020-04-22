import React from "react";

function Project(props) {
    return <div class="carousel-item active">
        <img src={props.src} class="d-block w-100 carousel-image projectImage"
            alt={props.name}></img>
        <div class="carousel-caption d-none d-md-block">
            <h5 class="projectName"><a href={props.href}>Project: {props.name}</a></h5>
        </div>
    </div>
}

export default Project;