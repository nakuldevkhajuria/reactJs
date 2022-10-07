
import './App.css';
import ClassComponent  from './component/classComponent';
import FunctionalComponent from './component/functionalComponent';
// import ClassComponent from './component/classComponent';
// import FunctionalComponent from './component/functionalComponent';

function App() {
 
 
  return (

    
    <div className="App">
      <header className="App-header">
        <p class="text-muted">
          Styling Using Functional and Class Component
        </p>
       
      </header>
      <p className='twoButtons'>
       
        </p><br /><br />
        <div className='bothComponents'>
        {/* <FunctionalComponent /> */}
        <ClassComponent />
      <FunctionalComponent />
        </div>
    </div>
  );
}

export default App;
