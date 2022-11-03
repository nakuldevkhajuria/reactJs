import React, { createContext, useState } from "react";

export const dataContext = createContext();

const Data = (props) => {
  const [students, setStudents] = useState([
    {
      id: "1",
      Name: "John",
      Age: "24",
      Course: "MERN",
      Batch: "June",
    }]);
  return (
    <div>
      <dataContext.Provider value={[students, setStudents]}>
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default Data;
