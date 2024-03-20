import React,{useState} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = ()=>{
    const[btnName,setBtnName] = useState("LogIn");
    function handleClick (){
        btnName==='LogIn'?setBtnName(' '): setBtnName('LogIn');
    }

    return (
        <div className="header">
            <div className="logo-container" >
                <img style={{height:"50px", width:"100px"}} src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>   <Link className="link" to="/"> Home</Link></li>
                    <li> <Link className="link" to="/about">About</Link> </li>
                    <li>    <Link className="link" to="/contact"> Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=> handleClick()}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;