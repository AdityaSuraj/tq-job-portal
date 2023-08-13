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
import SearchResultScreen from './screens/searchResult';
import Aboutus from './screens/aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignupScreen}/>
        <Route path="/login" Component={LoginScreen}/>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/aboutus" Component={Aboutus}/>
        <Route path="/contactus" Component={contactus}/>
        <Route path="/search-result/:city/:role" Component={SearchResultScreen}/>

      </Routes>
    </Router >
  );
}
export default App;
