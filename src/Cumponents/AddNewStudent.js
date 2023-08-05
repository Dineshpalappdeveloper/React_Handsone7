import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent } from "./StudentSlice";
import { useNavigate } from "react-router-dom";


const AddNewStudent = () => {
  const studentList = useSelector((state) => state.Student)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Course, setCourse] = useState('');
  const [Batch, setBatch] = useState('');
  const handleCancel = () => {
    nav(-1)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddStudent({
      Id: studentList.length,
      Name,
      Age,
      Course, Batch,
    }))

    setName("");
    setAge("")
    setBatch("")
    setCourse("")
    nav("/student")
  };
  return (
    <>
      <div>
        <h1>New Student</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            value={Name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Age:</label>
          <input
            value={Age}
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Course:</label>
          <input
            value={Course}
            type="text"
            onChange={(e) => setCourse(e.target.value)}
          />
          <label>Batch:</label>
          <input
            value={Batch}
            type="text"
            onChange={(e) => setBatch(e.target.value)}
          />
          <br />
          <input type="submit" value="submit" />
          <br />
          <button onClick={() => handleCancel}>Cancel</button>
        </form>
      </div>
    </>
  );
};
export default AddNewStudent;
