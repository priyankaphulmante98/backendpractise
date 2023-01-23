import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  {postFunction}  from '../Services/Api'

function Register() {
const Navigate = useNavigate()


const [inputData, setInputinputData] = useState({
    title:"",
    desc:"",
    price:""
})

function handleChange(e){
    // console.log(e.target.value)
const name = e.target.name
const value= e.target.value
console.log(name, value)
  
setInputinputData({...inputData,[name]: value })

}

// console.log(inputData);
async function handleSubmit(e){
    e.preventDefault()

    const  {title, desc, price} = inputData
    // console.log(title, desc, price)

    // console.log("hiiiiiiiiiiiiiiiiii")
  try {
    const data = new FormData()

    data.append('title', title)
    data.append('desc', desc)
    data.append('price', price)

    const header = {
        'Content-Type':'application/json'
    }

   const res = await  postFunction(data, header)
   console.log(res);
   Navigate('/')

}
   catch (error) {
    console.log(error)
  }

}



    return (
        <div>
          <form id="form">
            <input type="text" name="title"  placeholder='title' onChange={handleChange}/>
            <input type="text" name="desc" placeholder='desc' onChange={handleChange} />
            <input type="number" name="price" placeholder='price' onChange={handleChange}/>

            <button type="submit" onClick={handleSubmit}>Submit</button>

          </form>
        </div>
    )
}

export default Register
