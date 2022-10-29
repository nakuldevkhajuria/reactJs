// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import  Document  from "./components/Document";
import Bollywood from './components/Bollywood';

function App() {
  return (
    // <div className="App">
      
      
     
     
    //   <Document />
    // </div>
  
    <Routes>
      <Route path="/" element={<Document />} />
      <Route path="/bollywood" element={<Bollywood />} />
     
    </Routes>

    
  );
}

export default App;
