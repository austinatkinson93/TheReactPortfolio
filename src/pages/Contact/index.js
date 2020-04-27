import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Form from "../../components/Form"

function Contact() {
    return <div className="container contact ">
        <h1 className="title ">Contact</h1>
        <div className="container contactInfo ">
            <div className="section email">
                <div className="row">
                    <span className="icon">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"> </FontAwesomeIcon>
                    </span>
                    <h2>Email:</h2>
                </div>
                <p>- Austinatkinson1993@gmail.com</p>
            </div>
            <div className="section phone">
                <div className="row">
                    <span className="icon">
                        <FontAwesomeIcon icon={faPhoneVolume} size="lg"> </FontAwesomeIcon>
                    </span>                    <h2>Phone:</h2>
                </div>
                <p>- 954-520-5189</p>
            </div>
            <div className="section github">
                <div className=" row">
                    <span className="icon">
                        <FontAwesomeIcon icon={faGithubSquare} size="lg"> </FontAwesomeIcon>
                    </span>
                    <h2>Github:</h2>
                </div>
                <a href="https://github.com/austinatkinson93">https://github.com/austinatkinson93</a>
            </div>
        </div>
        <div className="contactEmailForm">
            <h2 className="title">Shoot Me An Email</h2>
            <Form ></Form>
        </div>
    </div>
}

export default Contact;