import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'


const projectdetail =  (props) => {
  const {project} = props  

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastname}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}
const mapStoP = (state, ownProp)=>{

  const id = ownProp.match.params.id;

  const projects = state.firestore.data.projects;
  //console.log(projects);
  const project = projects ? projects[id]:null
  return {
    project : project
  }
}



export default compose(
  connect(mapStoP),
  firestoreConnect([
    {collection:'projects'}
  ])
)
(projectdetail)