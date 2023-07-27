import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import SignupScreen from './screens/contactus';
import contactus from './screens/contactus';
// import job_info from './screens/job_info';
import Form from './screens/Form';
import Job from './screens/job';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignupScreen}/>
        <Route path="/login" Component={LoginScreen}/>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/job" Component={Job}/>
        <Route path="/Form" Component={Form}/>  
        <Route path="/contactus" Component={contactus}/>
      </Routes>
    </Router>
  );
}
export default App;
