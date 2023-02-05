import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        
<nav style={{display:"flex", justifyContent:"space-around"}}>
  <div className="nav-wrapper">

<ul id="nav-mobile" className="right">   
      <li><Link to="/">Signup</Link></li>
      <li><Link to="/login">Login </Link></li>
      <li><Link to="/todo">Todo</Link></li>
      <button className='btn'>Logout</button>
    </ul>
  </div>
</nav>
    )
}
export default Navbar
