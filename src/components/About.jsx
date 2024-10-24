import React from 'react'
import abt from '../../Abt.png'

const About = () => {
  const abtData = [
    {id:1,description:"A delightful culinary experience with a responsive user interface and cutting-edge technology."},
    {id:2,description:"Used Tailwind CSS - A seamless and efficient way to design a visually appealing user interface."},
    {id:3,description:"Utilizes the Swiggy API to offer an extensive list of restaurants for you to explore."},
    {id:4,description:"Custom hooks to improve code readability, modularity, and maintainability, making development a breeze."},
    {id:5,description:"Enhanced data management with Redux Toolkit, ensuring efficient state management and smooth data flow throughout the application."},
  ]
    
  return (
    <div className=''>
      <div className='float-left mx-10 my-14 w-[400px]  '>
        <img src={abt} className='' alt="" />
      </div>
      <div className=''>
      <p className='text-center text-3xl font-semibold font-serif mt-5 '>Welcome to Eatery Ease</p>
      <ul className='list-disc p-4 m-4 "'>
        {abtData.map((data)=> <li className='text-center p-3 text-xl  text-black font-mono' key={data.id} >{data.description}</li> )}
      </ul>
      </div>
    </div>
  )
}

export default About
