import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password ,"logindata")

    }
    return (
     <div>

     <form className='form' onSubmit={handleSubmit}>
     <h4>login form</h4>
    
    <div className="input-field col s12">
    <label for="email">Email</label>
    <input id="email" type="email" className="validate" onChange={(e) => setEmail(e.target.value)}/>
     </div>

     <div className="input-field col s12">
     <label for="password">Password</label>
    <input id="password" type="password" className="validate" onChange={(e) => setPassword(e.target.value)} />
    </div>

    <button className='btn' type="submit">LOGIN</button>

    </form>
    </div>
    )
}

export default Login
