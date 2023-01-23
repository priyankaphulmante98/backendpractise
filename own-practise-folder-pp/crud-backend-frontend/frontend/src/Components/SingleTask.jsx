import React from 'react'

function singleTask() {
  return (
    <div>
     <div  style={{border:"2px solid black", display:"flex", justifyContent:"space-around",backgroundColor:"orange", alignItems:"center"}}>
        <h2>React</h2>
        <h3>desc</h3>
        <h3>23</h3>

        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-eye"></i>
        <i class="fa-solid fa-trash"></i>
    

     </div>
    </div>
  )
}

export default singleTask
