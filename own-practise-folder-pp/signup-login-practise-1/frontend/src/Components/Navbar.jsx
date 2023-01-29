import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div id="navabar" style={{display:"flex",justifyContent:"space-around",border:"3px solid black", padding:"20px", fontSize:"22px"}}>

             <Link to="/">Signup</Link>
             <Link to="/login">Login</Link>

        </div>
    )
}

export default Navbar
