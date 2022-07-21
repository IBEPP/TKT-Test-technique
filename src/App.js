import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/company">Company</Link>
    </div>
  );
};

export default App;
