// import logo from './logo.svg';

import './App.css';
// import NormalComponent from './components/NormalComponent';
import ParentComponent from './components/ParentComponent';
import ClickCounter from './HocComponents/ClickCounter';
// import PureComponents from './components/PureComponents';

function App() {
  
  return (
    <div className="App">
      
      <ParentComponent />
      <ClickCounter />

      
    </div>
  );
}

export default App;
