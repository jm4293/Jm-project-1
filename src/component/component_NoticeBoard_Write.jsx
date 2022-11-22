import React from "react";
import { useLocation } from "react-router-dom";

function Write(){
    const location = useLocation();
    
    console.log(location)
    console.log(location.state.id)
    console.log(location.state.pw)

    return(
        <div>123</div>
    )
}

export default Write;