import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MaterialsProvider } from './context/MaterialsContext';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Materials from './components/Materials';
import UploadMaterial from './components/UploadMaterial';
import Payment from './components/Payment';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

// NavBar component with logout functionality
function NavBar() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <nav className="navbar">
      <div className="logo">Study Circle</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/materials">Materials</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        {isAuthenticated ? (
          <>
            <li className="user-greeting">
              Hello, {user.name || user.email}
            </li>
            <li>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="app-container">
      <NavBar />
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/upload" element={<UploadMaterial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 Study Circle. All rights reserved.</p>
        <p>~ Mahesh </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <MaterialsProvider>
          <AppContent />
        </MaterialsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
