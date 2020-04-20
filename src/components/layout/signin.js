import React from  'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authactions'

const SignedIn = (props)=>{

return (
    
   <ul className="right">
       <li><NavLink to="/createproject">New Project</NavLink>></li>
       <li><NavLink to="/" onClick={props.signOut}>Logout</NavLink>></li>
       <li><NavLink to="/" className="btn btn-floating pink lighten-1">
            {props.profile.initials}
           </NavLink></li>

   </ul>
)


}

const mdtp = (dispatch) =>{

    return {
        signOut: ()=> dispatch(signOut())  
    
    }
}


export default connect(null, mdtp)(SignedIn)