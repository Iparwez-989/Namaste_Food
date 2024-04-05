import React from 'react'
class UserClass extends React.Component{

    constructor(props){
        super(props)
        // console.log(props)
        this.state={
            count : 1,
        }
        console.log("Child Constructor Rendered")
    }
    componentDidMount(){
         console.log("Child Rendered Component did Mount")
    }
    
    
    render(){       // This render function will return a piece of jsx
        const {name,place} = this.props; // Destructuring of objects
        const {count,count2}= this.state
        console.log("Child rendered Called")
        return(

        <div className='user-card'>
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count+1,
                })
}}>Increase</button>
            <h1>Name: {name}</h1> 
            <h2>Place: {place}</h2>

        </div>
    )
    }



}

export default UserClass;