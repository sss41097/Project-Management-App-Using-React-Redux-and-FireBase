import React, { Component } from 'react'
import {connect} from 'react-redux'
import middlewarecreateproject from  '../../store/actions/projectactions'
import { Redirect } from 'react-router-dom'

class createproject extends Component {

    state = {
        title:'',
        content:''
    }

    handleChange = (e)=>{
            this.setState({
                [e.target.id] : e.target.value
            })
     }

     handleSubmit = (e)=>{
         e.preventDefault()
         this.props.createprojectfunction(this.state)
         this.props.history.push('/');
     }

    render() {
      const {auth} = this.props
      if (!auth.uid) return <Redirect to='/signinpage' /> 


        return (

            <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Create a New Project</h5>
             
              <div className="input-field">
                <input type="text" id='title' onChange={this.handleChange} />
                <label htmlFor="title">Project Title</label>
              </div>
             
              <div className="input-field">
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="content">Project Content</label>
              </div>
           
              <div className="input-field">
                <button className="btn pink lighten-1">Create</button>
              </div>
          
            </form>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


const mapdispatchtoprops = (dispatch)=>{

    return {
        createprojectfunction : (project) =>{
            dispatch(middlewarecreateproject(project))
        }
    }

}


export default connect(mapStateToProps, mapdispatchtoprops)(createproject)