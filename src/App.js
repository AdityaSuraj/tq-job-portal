import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import contactus from './screens/contactus';
import Privacy from './screens/privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignupScreen}/>
        <Route path="/login" Component={LoginScreen}/>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/contactus" Component={contactus}/>
        <Route path="/privacy" Component={Privacy}/>
      </Routes>
    </Router >
  );
}
export default App;
