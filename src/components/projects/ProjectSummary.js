import React from 'react'
import { Link } from "react-router-dom";



const ProjectSummary = ({project}) => {
    return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <Link to='/project/2'>
                <span className="card-title">{project.title}</span>
            </Link>
            <p>Posted by Jose</p>
            <p className="grey-text">3/11/2018 4:00am</p>
        </div>
    </div>
    )
}

export default ProjectSummary