import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// components
import Login from "./components/index/IndexContainer";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
          <Route exact path="/" element={<IndexContainer />} />
          
        </Routes>
       </div>
     </Router>
    );
  }
}

export default App;