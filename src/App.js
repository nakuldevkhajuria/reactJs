// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import { Home } from "./components/home";
// import { Contact } from "./components/Contact";
// import { Student } from "./components/student";
import  Navbar  from "./components/Navbar"
// import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
  <div>

    <Navbar />
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/student' element={<Student />}></Route>
    </Routes>
    </BrowserRouter> */}
  </div>
  );
}

export default App;
