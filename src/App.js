import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import SignupScreen from './screens/contactus';
import contactus from './screens/contactus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignupScreen}/>
        <Route path="/login" Component={LoginScreen}/>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/contactus" Component={contactus}/>
      </Routes>
    </Router >
  );
}
export default App;
