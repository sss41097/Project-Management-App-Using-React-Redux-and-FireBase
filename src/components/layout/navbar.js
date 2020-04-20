import React from  'react'
import {Link} from 'react-router-dom'
import SignedIn from './signin'
import SignedOut from './signout'
import {connect} from 'react-redux'


const Navbar = (props)=>{

const {auth, profile } = props;
const links = auth.uid ? <SignedIn profile={profile}/> : <SignedOut/>

return (
   <nav className="nav-wrapper grey darken-3">
    <div className="container">
        <Link to="/" className="brand-logo">Project Manager</Link>
        {links}
    </div>
   </nav>
)

                

}

const mapStatetoProps = (state) =>{
    
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }

}

export default connect(mapStatetoProps)(Navbar)