import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar/NavBar";
import { LoginComponent } from "./components/Login/LoginComponent";
import Signup from './components/SignUp/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <NavBar />
      {/* Other components for the home page */}
    </div>
  );
}

export default App;
