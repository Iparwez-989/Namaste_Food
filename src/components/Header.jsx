import React,{useContext, useState} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = ()=>{
    const[btnName,setBtnName] = useState("LogIn");
    function handleClick (){
        btnName==='LogIn'?setBtnName(' '): setBtnName('LogIn');
    }
    const data= useContext(UserContext)
    // console.log(name)
    return (
        <div className="flex justify-between bg-gray-300 shadow-md">
            <div className="logo-container" >
                <img style={{height:"50px", width:"100px"}} src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-2 ">
                    <li>   <Link className="link px-4 " to="/"> Home</Link></li>
                    <li> <Link className="link px-4" to="/about">About</Link> </li>
                    <li>    <Link className="link px-4" to="/contact"> Contact</Link></li>
                    <li>    <Link className="link px-4" to="/mart"> Mart</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn px-4" onClick={()=> handleClick()}>{btnName}</button>
                    <li className="px-4">{data.name}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;