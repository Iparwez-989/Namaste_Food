import React from "react";
const ContactUs = ()=>{
    return(
        <div>
            <center><p className="text-2xl font-semibold">Please fill up the form! </p></center>
            <form action="">
                <label htmlFor=""> Your name:</label>
                <input type="text" placeholder="Enter your name" className="p-3 m-2  border border-black" />
                <label htmlFor="">Enter your Email:</label>
                <input type="email" placeholder="Enter your Email" className="p-3 m-2 border border-black"/>
                <label htmlFor="">Your Message:</label>
                <input type="text" placeholder="Message" className="p-3 m-3 border border-black rounded"/>
                <button className="border border-black rounded-xl m-2 p-2 bg-black text-white hover:bg-green-400 hover:text-black">Submit</button>
                

            </form>
            
        </div>
    )
}

export default ContactUs