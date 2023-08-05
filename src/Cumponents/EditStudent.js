import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { EditedStudent } from "./StudentSlice";

const EditStudent = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const data = useLocation();

    const studentId = data.state;

    const sData = useSelector((state) => { state.Studedent.filter((item) => item.id === studentId) })
    console.log(sData);
    const { Name, Age, Batch, Course } = sData[0];
    const [newName, setName] = useState(Name);
    const [newAge, setAge] = useState(Age);
    const [newCourse, setCourse] = useState(Batch);
    const [newBatch, setBatch] = useState(Course);
    const handleCancel = () => {
        nav("/student")
        console.log("cancel");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("done");
        dispatch(EditedStudent({
            id: studentId,
            newName,
            newAge, newBatch, newCourse
        }))
        nav("/student")
    }
    return (
        <>
            <div>
                <h1>Edit Student</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        value={newName}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Age:</label>
                    <input
                        value={newAge}
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <label>Course:</label>
                    <input
                        value={newCourse}
                        type="text"
                        onChange={(e) => setCourse(e.target.value)}
                    />
                    <label>Batch:</label>
                    <input
                        value={newBatch}
                        type="text"
                        onChange={(e) => setBatch(e.target.value)}
                    />
                    <br />
                    <button onClick={handleSubmit} >Submit</button>
                    <br />

                </form>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </>
    )
}

export default EditStudent 