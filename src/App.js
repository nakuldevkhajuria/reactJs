// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom'
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import  Student  from "./components/student";
import  Navbar  from "./components/Navbar"
import Studentsdesc from './components/students-desc';




function App() {

  

  return (
  <>

    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/home" element ={<Home/>} />
        <Route path="/student" element ={<Student />} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/students-desc" element ={<Studentsdesc   />} />

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
  );
}

export default App;
