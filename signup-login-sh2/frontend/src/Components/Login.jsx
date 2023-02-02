import React, { useContext} from "react";
import { useState } from "react";
import { AppContext } from "../ContextApi/AppContext";
import { reducer } from "../ContextApi/reducer";

const init={email:'',password:''}

function Login() {

const [form,setForm]=useState(init)

  const { state,dispatch } = useContext(AppContext);
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
    dispatch({type:"logindata",payload:form})
 
  }



  return (
    <div>
      {/* signup page */}

      <form onSubmit={handleSubmit}>
       

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

        <button type="submit">login</button>

      </form>
    </div>
  );
}

export default Login;
