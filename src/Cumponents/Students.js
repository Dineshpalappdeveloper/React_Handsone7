import React from "react";
import { NavLink } from "react-router-dom";
import StudentData from "./StudentData";
// import Store from "./Store";
// import { Provider } from "react-redux";

const Students = () => {
    return (
        <>
            <diV className="dispaly" >
                <h1>Students Details</h1>
                <NavLink to="/student/add">    <button className="btn1">Add New Student </button></NavLink>
            </diV>
            <div className="data-table">
                <StudentData />


            </div>
        </>
    )
}
export default Students