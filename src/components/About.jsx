import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props){
    super(props)
      console.log("Parent Constructor Called")

  }
  componentDidMount(){
    console.log("Parent component did mount called")

    setInterval(()=>{
      console.log("hello")
    },1000)
  }
  componentDidUpdate(){
    //it'll be called while leaving the page
    console.log("Called did update")
    
  }
  render(){
    console.log("Parent render function Called")
    return (
      <>
      <div>
        <h1>This is about page</h1>
        <h3>Welcome</h3> 
        <UserClass name={"Irfan Parwez"} place={"Chittoor{class}"} />

      </div>
      </>
    )
  }
}

// const About = () => (
//   <div>
//     <h1>This is about page</h1>
//     <h3>Welcome</h3> 
//     <UserClass name={"Irfan Parwez"} place={"Chittoor{class}"} />

//   </div>
// )

export default About
