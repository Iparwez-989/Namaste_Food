import React, { useEffect, useState } from 'react'
const User = ()=>{
    const [count,setCount]= useState(0)


    useEffect(()=>{
        console.log("useEffect Called")
        timer = setInterval(()=>{
            console.log("Hello from useEffect")

        },1000)
        return ()=>{
            console.log("UseEffect return")
            // This return function is same as component will unmount{Class component concept}
            // This function is called while going to other page
            //  It can be said as cleaning our mess
            // If we will not do so it will run continuously in the background and make the page slow

            clearInterval(timer)
        }

    },[])
    console.log("render")
    
    return (
    <div className='user-card'>
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>inc</button>
        <h1>Name: Irfan</h1> 
        <h2>Place: Chittoor</h2>

    </div>
    )
}

export default User
