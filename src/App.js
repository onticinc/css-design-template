import React, { Component } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// components
import IndexContainer from "./components/index/IndexContainer";

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