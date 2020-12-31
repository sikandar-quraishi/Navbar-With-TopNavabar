import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./layout/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
};

export default App;
