// import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AppContext } from '../Context/AppContext'


function Signup() {

    const [data, setData] = useState(
        {name:"", 
        email:"", 
        password:""
    })

// const {state: {signupData}, dispatch} = useContext

(AppContext)

    function handleChange(e){
        const {name, value} = e.target
        setData({...data, [name]:value})
        

    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(data)
        // alert("user login sucessfully")
    //    dispatch({type:"signupData", payload:data})

    }

    // useEffect(() => {
    //    axios(`http://localhost:8000/user`)
    // }, [])
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' name="name" onChange={handleChange} /><br />
            <input type="text" placeholder='email' name="email" onChange={handleChange}/><br />
            <input type="text" placeholder='password' name="password" onChange={handleChange} /><br />

            <button type='submit'>Submit</button><br />

           </form>
        </div>
    )
}

export default Signup
