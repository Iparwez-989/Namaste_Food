import React,{useState} from "react";
import { LOGO_URL } from "../utils/constants";

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
                    <li>Home</li>
                    <li> <a href="/about">About</a> </li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=> handleClick()}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;