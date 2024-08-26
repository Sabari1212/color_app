import React from 'react'


const Input = ({color,setColor,tcolor,setTcolor}) => {
    
  return (
    <div style={{marginRight:"10px",padding:'20px'}}>
        <input style={{paddingTop:'10px',marginTop:'20px',border:'2px solid black'}} type="text" value={color} onChange={(e)=>setColor(e.target.value)}/><br></br>
        <button  style={{paddingTop:'10px',marginTop:'20px'}}onClick={()=>setTcolor(!tcolor)}>Change font  color</button>
        
    </div>
  )
}

export default Input