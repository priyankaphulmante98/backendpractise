import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleTaskFunction, updateTaskFunction } from '../Services/Api'

function Edit() {
const {id} = useParams()
// console.log(id)
const Navigate = useNavigate()

const [userData, setUserData] = useState({
  title:"",
  desc:"",
  price:""
})

function handleChange(e){
    // console.log(e.target.value)
const name = e.target.name
const value= e.target.value
console.log(name, value)
  
setUserData({...userData,[name]: value })

}

console.log(userData);
function handleSubmit(e){
    e.preventDefault()


}


const fetchData = async () => {
    
    const res = await getSingleTaskFunction(id)
    console.log(res.data);
    setUserData(res.data)
  }

  
  async function handleSubmit(e){
    e.preventDefault()

    const {title, desc, price} = userData
    const data = new FormData()
    data.append("title", title)
    data.append("desc", desc)
    data.append("price", price)

const type ={

    'Content-Type':"application/json"
}

const res = await updateTaskFunction(id,type,data)
console.log(res);
Navigate('/')

    
}


  useEffect(() => {
    fetchData()
  }, [])


    return (
        <div>
          <form id="form">
            <input type="text" name="title"  placeholder='title' onChange={handleChange} value={userData.title}/>
            <input type="text" name="desc" placeholder='desc' onChange={handleChange} value={userData.desc}/>
            <input type="number" name="price" placeholder='price' onChange={handleChange} value={userData.price}/>

            <button onClick={handleSubmit}>Submit</button>

          </form>
        </div>
    )
}

export default Edit