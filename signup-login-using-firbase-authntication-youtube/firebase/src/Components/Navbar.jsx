import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='Navbar' style={{display:"flex", backgroundColor:"orange", padding:"20px", fontSize:"22px",   justifyContent:"space-evenly"}}>
                <Link to="/">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/todo">Todo</Link>
            </div>
        </div>
    )
}

export default Navbar
