import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects})=> {
    const projectList = projects 
        && projects
        .map(project => <ProjectSummary project={project} key={project.id}/>)
    return (
        <div className="project-list section">
           {projectList}
        </div>
       
    )
}

export default ProjectList