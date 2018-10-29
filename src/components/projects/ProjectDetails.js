import React from 'react'

const ProjectDetails = (props) => {
    const {id} = props.match.params


  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">Project Title - {id}</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum neque, sequi consectetur dolorum officiis nobis porro itaque, tenetur laboriosam unde ipsa rem ducimus deserunt? Cum maxime vitae praesentium voluptas molestias?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by Jose</div>
              <div>3/11/2018 4:00am</div>
          </div>
      </div>
    </div>
  )
}
 
export default ProjectDetails
