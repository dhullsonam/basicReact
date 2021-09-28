import logo from './logo.svg';
import './default.scss'
import Header from './Components/Header'
import HomePage from './pages/HomePage/index';
import Home from './Routers/Home'

import{
  BrowserRouter as Router,
  Route,
  Switch,
  link
} from "react-router-dom"


function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <div className="main">

    //     <HomePage />
    //   </div>
    // </div>
    <router>
      <div><ul>
        <li>
          <link to='/'>Home </link>
        </li>
      </ul>
      <switch>
        <Route exact path ='/'></Route>
      </switch>
      </div>
    </router>
  );
}

export default App;
