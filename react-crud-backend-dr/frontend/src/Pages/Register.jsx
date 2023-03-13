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
const [image, setImage] =useState("");

function handleChange(e){
    // console.log(e.target.value)
const name = e.target.name
const value= e.target.value
console.log(name, value)
  
setInputinputData({...inputData,[name]: value })

}

function handleImage(e){
  console.log(e.target.files[0])
  setImage(e.target.files[0])

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
    data.append('profile', image)

    const header = {
        'Content-Type':'multipart/form-data'
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
            <input type="file" name = "image" onChange={handleImage}  />
            <input type="text" name="title"  placeholder='title' onChange={handleChange}/>
            <input type="text" name="desc" placeholder='desc' onChange={handleChange} />
            <input type="number" name="price" placeholder='price' onChange={handleChange}/>

            <button type="submit" onClick={handleSubmit}>Submit</button>

          </form>
        </div>
    )
}

export default Register
