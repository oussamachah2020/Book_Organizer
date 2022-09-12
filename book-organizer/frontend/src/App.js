import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import Library from "./pages/Library";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
