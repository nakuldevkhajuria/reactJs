import React, { createContext, useState } from "react";

export const dataContext = createContext();

const Data = (props) => {
  const [students, setStudents] = useState([
    {
      id: "",
      Name: "",
      Age: "",
      Course: "",
      Batch: "",
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
