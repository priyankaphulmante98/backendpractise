import React, { useState } from 'react'
import { auth  } from 'firebase'

import ReactDOM from 'react-dom'


function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 


    async function handleSubmit(e){
        e.preventDefault();
        // console.log(name, email, password, "Signupdata")


    try {

        const result =  await  auth.createUserWithEmailAndPassword(name, email, password)
      window.toast({html: `user signup sucessfully!` ,classes:"green"})
    } catch (error) {
        window.toast({html: `error`,classes:"red"})
            
        }
     

    }
    return (
     <div>
    <form className='form' onSubmit={handleSubmit} >
     <h3>Signup</h3>
    

     <div className="input-field col s12">
    <label for="name">Name</label>
    <input id="name" type="text" className="validate" onChange={(e) => setName(e.target.value)}/>
     </div>

    
    <div className="input-field col s12">
    <label for="email">Email</label>
    <input id="email" type="email" className="validate" onChange={(e) => setEmail(e.target.value)}/>
     </div>

     <div className="input-field col s12">
     <label for="password">Password</label>
    <input id="password" type="password" className="validate" onChange={(e) => setPassword(e.target.value)} />
    </div>
    
    <button className='btn' type="submit">Signup</button>

    </form>
    </div>

    )
}

export default Signup
