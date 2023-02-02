import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    )
}

export default AllRoutes
