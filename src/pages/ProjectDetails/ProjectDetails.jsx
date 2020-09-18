import React from 'react';
import { Link } from "react-router-dom"
import { Message, Icon, Divider, Segment, Image } from 'semantic-ui-react'
import "./ProjectDetails.css";

const ProjectDetails = () => (
    <>
    <h1>Project Details Page</h1>
    <Message>
        
        <Message.Header>Project Information</Message.Header>
        <p>
            We updated our privacy policy here to better service our customers. We
            recommend reviewing the changes.
        </p>
    </Message>
    <Message>
    <Message.Header>Links to Feature Sets</Message.Header>
    <p>
        We updated our privacy policy here to better service our customers. We
        recommend reviewing the changes.
    </p>
    </Message>
    <Message>
    <Message.Header>Links to Feature Sets</Message.Header>
    <p>
        We updated our privacy policy here to better service our customers. We
        recommend reviewing the changes.
    </p>
    </Message>
    </>
)

export default ProjectDetails;