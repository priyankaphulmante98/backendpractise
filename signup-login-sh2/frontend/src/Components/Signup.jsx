import React, { useContext, useEffect} from "react";
import { useState } from "react";
import { AppContext } from "../ContextApi/AppContext";
import { reducer } from "../ContextApi/reducer";

const init={name:'',email:'',password:''}



function Signup() {

const [form,setForm]=useState(init)

  const { state: { signupdata },dispatch } = useContext(AppContext);
//   console.log(signupdata, "data");

  function handleClick(e) {
    const { name, value } = e.target;
    setForm({...form,
    [name]:value
    })

  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(form)
    dispatch({type:"signupdta",payload:form})
 
  }

useEffect(()=>{
  fetch('http://localhost:8000/user').then(res=>res.json()).then(res=>dispatch({type:"signupdta",payload:res}))
 

},[])

  return (
    <div>
      {/* signup page */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleClick}
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleClick}
        />

        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleClick}
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Signup;
