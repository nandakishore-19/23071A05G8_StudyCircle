import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="page">
      <h1>Study Circle</h1>
      
      {isAuthenticated ? (
        <div className="welcome-banner">
          <h2>Hello, {user.name || user.email}!</h2>
          <p>Welcome back to your learning journey.</p>
        </div>
      ) : (
        <p>Welcome to the Study Circle - Your learning community!</p>
      )}
      
      <div className="features">
        <div className="feature-card">
          <h3>Learn Together</h3>
          <p>Access quality study materials shared by the community</p>
          {!isAuthenticated && (
            <Link to="/login" className="btn feature-btn">Login to Access</Link>
          )}
        </div>
        <div className="feature-card">
          <h3>Share Knowledge</h3>
          <p>Upload your own study materials to help others</p>
          {isAuthenticated ? (
            <Link to="/upload" className="btn feature-btn">Upload Now</Link>
          ) : (
            <Link to="/register" className="btn feature-btn">Register to Share</Link>
          )}
        </div>
        <div className="feature-card">
          <h3>Grow Skills</h3>
          <p>Improve your understanding through collaborative learning</p>
          <Link to="/materials" className="btn feature-btn">Browse Materials</Link>
        </div>
      </div>
      
      {isAuthenticated && (
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <Link to="/materials" className="btn">Browse Materials</Link>
            <Link to="/upload" className="btn">Upload Material</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
