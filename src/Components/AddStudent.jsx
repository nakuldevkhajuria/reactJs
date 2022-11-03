import React, { useContext, useState } from "react";
import { dataContext } from "./Store/Data";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./style.css";

const AddStudent = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Course, setCourse] = useState("");
  const [Batch, setBatch] = useState("");
  const [students, setStudents] = useContext(dataContext);

  const addNewData = () => {
    if (((Name && setName) && (Age && setAge) && (Course && setCourse) && (Batch && setBatch)) === null) {
      alert('enter')
    }
    else (
      setStudents([
        ...students,
        {
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
          id: new Date().getTime().toString(),
        },
      ])
    )
  };
  return (
    <div>
      <div className="edit-div">
        <input name="Namee" required onChange={(e) => {setName(e.target.value)}} value={Name} placeholder="Name" type="text" />

        <input name="Agee" required onChange={(e) => {setAge(e.target.value)}} value={Age} placeholder="Age" type="text" />

        <input name="Coursee" required onChange={(e) => {setCourse(e.target.value)}} value={Course} placeholder="Course" type="text" />

        <input name="Batchh" required onChange={(e) => {setBatch(e.target.value)}} value={Batch} placeholder="Batch" type="text"/>
      </div>
      <Link to="/student"> <div className="button" onClick={addNewData}>Submit</div> </Link>
      <Link to="/student"> <button className="btn-cancel">Cancel</button> </Link>
    </div>
  );
};
export default AddStudent;