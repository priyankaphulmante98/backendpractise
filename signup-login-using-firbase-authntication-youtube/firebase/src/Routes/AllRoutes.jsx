import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Todo from '../Components/Todo'

function AllRoutes() {
    return (
     <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<Todo/>} />
     </Routes>

    
    )
}

export default AllRoutes
