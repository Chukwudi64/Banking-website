import React from "react";
import { Navigate } from "react-router-dom";


function Logout() {
    let authuser= sessionStorage.getItem('user')
    console.log(authuser)
    if (authuser === "USER") {
        sessionStorage.removeItem("user")
    }
  return (<Navigate to="/Home" /> )
}

export default Logout

