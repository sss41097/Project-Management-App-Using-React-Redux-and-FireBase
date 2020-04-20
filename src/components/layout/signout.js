import React from  'react'
import {NavLink} from 'react-router-dom'


const SignedIn = ()=>{

return (
    
   <ul className="right">
       <li><NavLink to="/signuppage">Signup</NavLink>></li>
       <li><NavLink to="/signinpage">Signin</NavLink>></li>

   </ul>
)


}

export default SignedIn