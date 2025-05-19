import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CGPACalculator from './components/CGPACalculator';
import Scholarship from './components/Scholarship';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cgpa-calculator">CGPA Calculator</Link></li>
          <li><Link to="/scholarship">Scholarship</Link></li>
          <li><link to="/studentdetails">studentdetails</link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cgpa-calculator" element={<CGPACalculator />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/studentdetails" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;