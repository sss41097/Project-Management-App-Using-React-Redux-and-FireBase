import React, {Component} from 'react'
import Notifications from './notification'
import ProjectList from '../projects/projectlist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render() {

      const {auth, notifications} = this.props
      if (!auth.uid) return <Redirect to='/signinpage' /> 
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={this.props.projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications}/>
            </div>
          </div>
        </div>
      )
    }
  }

const mapStoP = (state)=>{
  //console.log(state)
  return {
    auth: state.firebase.auth,
    projects : state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  }
}



export default compose(
  connect(mapStoP),
  firestoreConnect([
    {collection:'projects', orderBy:['createdAt', 'desc']},
    {collection :'notifications', limit:6, orderBy:['time','desc']}
  ])
)
(Dashboard)