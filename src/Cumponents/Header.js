import React from "react"
import "../App.css"
import { NavLink } from "react-router-dom"
const Header = () =>{
    return(
        <>
        <div className="header">
           <NavLink className="nav" to="/">
             Home
           </NavLink>
         
           <NavLink className="nav" to="/student">
             Student
           </NavLink>
           <NavLink className="nav" to="/contact">
             ContactUs
           </NavLink>
        </div>
        </>
    )
}
export default Header 