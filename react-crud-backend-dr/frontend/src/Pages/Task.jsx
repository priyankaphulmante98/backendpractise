import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { deleteFunction } from '../Services/Api'
import { getFunction } from '../Services/Api'
import { baseUrl } from '../Services/Url'




function Task() {

  const [userData, setUserData] = useState([])

  const fetchData = async () => {
    const res = await getFunction()
    console.log(res.data);
    setUserData(res.data)
  }


  async function handleDeleteUser(id){
    // console.log(id);
    await deleteFunction(id)
    fetchData()

  }

  useEffect(() => {

  fetchData()

  }, [])
  return (
  <div>
    <NavLink to="/register">
   <button>Add Task</button>
   </NavLink>
    {
      userData.map((e, i) =>{
      return( <div 
         style={{border:"2px solid black", display:"flex", justifyContent:"space-around",backgroundColor:"pink", alignItems:"center"}}>
        <h1>{e.title}</h1>
        <h3>{e.desc}</h3>
        <h3>{e.price}</h3>
        

        <NavLink to={`/edit/${e._id}`}>
        <i class="fa-solid fa-pen-to-square"></i>
        </NavLink>
      
        <NavLink to={`/singleTask/${e._id}`}>
        <i  class="fa-solid fa-eye"></i>
        </NavLink>

        <div onClick={() =>{ handleDeleteUser(e._id)} }><i class="fa-solid fa-trash"></i></div>
      
    
      

  </div>
      )
      }  )
    }
    

    </div>
  )
}

export default Task


