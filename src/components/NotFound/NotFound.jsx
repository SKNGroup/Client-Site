import React from "react";
import { useNavigate } from "react-router-dom";




export function NotFound(){
    const navigate=useNavigate();

    return(<>
    <div className="container">
    <div className="not-box"> 
        <p className="size-bg">404</p>
        <p className="size-bg">This is Page Not Found</p>
        <button className="go-back" onClick={()=>{navigate('/')}}>Go To Home</button>
        </div>
    </div>
    </>)
}