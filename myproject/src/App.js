//  
import ComponentLifeCycle from './components/ComponentLifeCycle';
import SimpleCalc from './components/SimpleCalc';
import StylingDemo from './components/StylingDemo';
import { BrowserRouter , Route} from "react-router-dom";
import ToDoList from './components/ToDoList/ToDoList';
import Translate from './Translate';


function App() {
  return (

    <div className="App">
      
      {/* <BrowserRouter >
      <Route path = "/home" component={HomePage} /> */}
      {/* <Route path = "/db" component = {DashBoard}/> */}
      {/* <ToDoList/> */}
      <Translate/>
    </div>
  );
}

export default App;
