import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMaterials } from '../context/MaterialsContext';
import { useAuth } from '../context/AuthContext';

function UploadMaterial() {
  const navigate = useNavigate();
  const { addMaterial } = useMaterials();
  const { isAuthenticated } = useAuth();
  const [material, setMaterial] = useState({
    title: '',
    subject: '',
    description: '',
    price: '',
    type: 'PDF',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setMaterial({...material, file: e.target.files[0]});
    } else {
      setMaterial({...material, [e.target.name]: e.target.value});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if user is logged in
    if (!isAuthenticated) {
      alert('Please log in to upload materials');
      navigate('/login');
      return;
    }
    
    setIsSubmitting(true);
    
    // Add the new material to the context
    try {
      const newMaterial = addMaterial(material);
      console.log('Upload data:', newMaterial);
      
      // Show success message
      alert('Material uploaded successfully!');
      
      // Reset form
      setMaterial({
        title: '',
        subject: '',
        description: '',
        price: '',
        type: 'PDF',
        file: null
      });
      
      // Option to navigate to materials page
      if (window.confirm('Would you like to view all materials?')) {
        navigate('/materials');
      }
    } catch (error) {
      console.error('Error uploading material:', error);
      alert('Failed to upload material. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <h1>Upload Study Material</h1>
      <p>Share your knowledge by uploading study materials. Set a fair price for your work.</p>
      
      {!isAuthenticated && (
        <div className="login-prompt">
          <p>You need to be logged in to upload materials.</p>
          <button onClick={() => navigate('/login')} className="btn">Login Now</button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={material.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" value={material.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" value={material.type} onChange={handleChange} required>
            <option value="PDF">PDF</option>
            <option value="Video">Video</option>
            <option value="eBook">eBook</option>
            <option value="Audio">Audio</option>
            <option value="Presentation">Presentation</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input type="number" name="price" min="0" step="0.01" value={material.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={material.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>File</label>
          <input type="file" name="file" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
}

export default UploadMaterial;
