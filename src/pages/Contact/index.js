import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Form from "../../components/Form"

function Contact() {
    return <div class="container contact ">
        <h1 class="title ">Contact</h1>
        <div class="container contactInfo ">
            <div class="section email">
                <div class="row">
                    <span class="icon">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"> </FontAwesomeIcon>
                    </span>
                    <h2>Email:</h2>
                </div>
                <p>- Austinatkinson1993@gmail.com</p>
            </div>
            <div class="section phone">
                <div class="row">
                    <span class="icon">
                        <FontAwesomeIcon icon={faPhoneVolume} size="lg"> </FontAwesomeIcon>
                    </span>                    <h2>Phone:</h2>
                </div>
                <p>- 954-520-5189</p>
            </div>
            <div class="section github">
                <div class=" row">
                    <span class="icon">
                        <FontAwesomeIcon icon={faGithubSquare} size="lg"> </FontAwesomeIcon>
                    </span>
                    <h2>Github:</h2>
                </div>
                <a href="https://github.com/austinatkinson93">https://github.com/austinatkinson93</a>
            </div>
        </div>
        <div class="contactEmailForm">
            <h2 class="title">Shoot Me An Email</h2>
            <Form ></Form>
        </div>
    </div>
}

export default Contact;