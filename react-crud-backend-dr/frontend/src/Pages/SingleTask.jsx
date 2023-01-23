import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleTaskFunction } from '../Services/Api'

function SingleTask() {
    const [userData, setUserData] = useState([])

    const {id} = useParams()
    console.log(id)

    const fetchData = async () => {
        const res = await getSingleTaskFunction(id)
        console.log(res.data);
        setUserData(res.data)
      }
    
    useEffect(() => {
        fetchData()
    }, [])



        return( <div 
            style={{border:"2px solid black", display:"flex", justifyContent:"space-around",backgroundColor:"pink", alignItems:"center"}}>
           <h1>{userData.title}</h1>
           <h3>{userData.desc}</h3>
           <h3>{userData.price}</h3>
     </div>
     
    )
}

export default SingleTask
