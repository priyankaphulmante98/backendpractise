import React, { useState } from 'react'


function Edit() {
    
    const [data, setData] = useState({
        title:"",
        desc:"",
        price:""

    })


    function handleChange(e){
        // console.log(e.target.value)
        const name= e.target.name
        const value= e.target.value
        console.log(name, value);

       setData({...data, [name]:value })

    }
    console.log(data);


    function handleSubmit(e){
        e.preventDefault()
        

    }



  return (
    <div>
      {/* Register page */}
<form id="form">
    <input type="text" name="title" placeholder='title' onChange={handleChange}/>
    <input type="text"  name="desc" placeholder='desc'onChange={handleChange}/>
    <input type="number" name="price" placeholder='price'onChange={handleChange}/>
    
   <button onClick={handleSubmit}>Submit</button>
</form>


    </div>
  )
}

export default Edit
