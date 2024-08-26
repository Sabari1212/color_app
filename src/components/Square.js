import React from 'react'

const Square = ({color,tcolor}) => {
  return (
    <div className='square'
    style={{
        backgroundColor:color,
        height:"300px",
        width:"300px",
        border:"2px solid black",
        marginTop:"5%",
        marginLeft:"40%",

        color:tcolor? "black" : "white"
        


    }}>
        <p style={{
            fontSize:'20px',
            marginTop:'130px',
            marginRight:'10px',
            fontFamily:'sans-serif',
            fontWeight:'bold'
           
        }} >{color}</p>
        

    </div>
  )
}

export default Square