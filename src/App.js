// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom'
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import  Student  from "./components/student";
import  Navbar  from "./components/Navbar"
import Studentsdesc from './components/students-desc';
import {  useState } from 'react';
import Studentsupdate  from './components/students-update';




function App() {
  const [users,setUsers] = useState([]);
//  editStudent = (n, a, c, b, ind) => {
//     let students = this.state.arr;

//     // arr[ind][0] = n;
//     // arr[ind][1] = a;
//     // arr[ind][2] = c;
//     // arr[ind][3] = b;

//     if(n != "") {
//       students[ind][0] = n;
//     }
//     if(a != "") {
//       students[ind][1] =  a;
//     }
//     if(c != "") {
//       students[ind][2] =  c;
//     }
//     if(b != "") {
//       students[ind][3] =  b;
//     }

//     // editStudents(arr);/
//   }



  return (
    
    <>
   {/* <div>{this.props.users}</div> */}
    
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/home" element ={<Home/>} />
        <Route path="/student" element ={<Student users={users}/>} />
        <Route path="/contact" element ={<Contact />} />
        <Route path="/students-desc" element ={<Studentsdesc  users={users} />} />
        <Route exact  path="/students-update/:index" element ={<Studentsupdate users={users} updateUsers ={setUsers} />} />
        
      </Routes>
    </div>
    {/* <BrowserRouter>  
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/student' element={<Student />}></Route>
    </Routes>
    </BrowserRouter> */}
  </>
  ) 
};
export default App;


