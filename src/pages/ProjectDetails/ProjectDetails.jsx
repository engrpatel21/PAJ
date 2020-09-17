import React from 'react';
import { Link } from "react-router-dom"
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
    return (
        <div class="textDiv">
            <h1>Project Details Page</h1>
            <div>
                <h2>Project Information</h2>
            </div>
            <div>
                Semantic UI grid for project trackins columns.
            </div>
            <br></br>
            <div>
                <h2>Links to Feature-sets</h2>
            </div>
            <div>
                Semantic UI grid for project trackins columns.
            </div>
            <br></br>
            <div>
                <h2>Add Comments Here</h2>
            </div>
            <div>
                Semantic UI grid for project trackins columns.
            </div>
            <br></br>
            <a href="/">RETURN</a>
        </div>
    )
}

export default ProjectDetails;