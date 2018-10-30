import React from 'react'

const ProjectSummary = ({project}) => {
    console.log(project);
    return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">           
            <span className="card-title">{project.title}</span>            
            <p>Posted by {`${project.authorFirstName} ${project.authorLastName}`} </p>
            <p className="grey-text">3/11/2018 4:00am</p>
        </div>
    </div>
    )
}

export default ProjectSummary