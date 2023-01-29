import React from 'react'
import { useState } from 'react'

function Login() {

    const [data, setData] = useState(
        {
        email:"", 
        password:""
    })


    function handleChange(e){
        const {name, value} = e.target
        setData({...data, [name]:value})
        

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        alert("user login sucessfully")


    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder='email' name="email" onChange={handleChange}/><br />
            <input type="text" placeholder='password' name="password" onChange={handleChange} /><br />

            <button type='submit'>Submit</button><br />

           </form>
        </div>
    )
}

export default Login