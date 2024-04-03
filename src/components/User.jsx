import React, { useState } from 'react'
const User = ()=>{
    const [count]= useState(0)
    
    return (
    <div className='user-card'>
        <h1>Count: {count}</h1>
        <h1>Name: Irfan</h1> 
        <h2>Place: Chittoor</h2>

    </div>
    )
}

export default User
