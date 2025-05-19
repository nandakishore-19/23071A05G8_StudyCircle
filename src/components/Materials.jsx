import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { useMaterials } from '../context/MaterialsContext';

function Materials() {
  const navigate = useNavigate();
  const { materials } = useMaterials();
  const [showModal, setShowModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [filteredMaterials, setFilteredMaterials] = useState(materials);
  const [filters, setFilters] = useState({
    subject: '',
    type: ''
  });
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    
    // Apply filters
    let result = materials;
    if (newFilters.subject) {
      result = result.filter(material => material.subject === newFilters.subject);
    }
    if (newFilters.type) {
      result = result.filter(material => material.type === newFilters.type);
    }
    
    setFilteredMaterials(result);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({ subject: '', type: '' });
    setFilteredMaterials(materials);
  };

  const handleDownloadClick = (material) => {
    setSelectedMaterial(material);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMaterial(null);
  };

  // Get unique subjects and types for filter dropdowns
  const subjects = [...new Set(materials.map(material => material.subject))];
  const types = [...new Set(materials.map(material => material.type))];

  // Update filtered materials when materials change
  React.useEffect(() => {
    setFilteredMaterials(materials);
  }, [materials]);

  return (
    <div className="page">
      <h1>Study Materials</h1>
      <p className="materials-intro">Browse our collection of premium study materials. Purchase and download what you need.</p>
      
      <div className="filter-section">
        <select 
          className="filter-dropdown" 
          name="subject" 
          value={filters.subject} 
          onChange={handleFilterChange}
        >
          <option value="">All Subjects</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
        
        <select 
          className="filter-dropdown" 
          name="type" 
          value={filters.type} 
          onChange={handleFilterChange}
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        
        <button className="btn filter-reset" onClick={resetFilters}>Reset Filters</button>
      </div>
      
      {filteredMaterials.length === 0 ? (
        <div className="no-materials">
          <p>No materials match your current filters. Try adjusting your criteria or upload new materials.</p>
          <button className="btn" onClick={() => navigate('/upload')}>Upload New Material</button>
        </div>
      ) : (
        <div className="materials-list">
          {filteredMaterials.map(material => (
            <div key={material.id} className="material-card">
              <h3>{material.title}</h3>
              <p><strong>Subject:</strong> {material.subject}</p>
              <p><strong>Type:</strong> {material.type}</p>
              {material.description && (
                <p className="material-description">{material.description.slice(0, 100)}...</p>
              )}
              <p className="material-price"><strong>Price:</strong> ${material.price.toFixed(2)}</p>
              <button 
                className="btn" 
                onClick={() => handleDownloadClick(material)}
              >
                Purchase & Download
              </button>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <PaymentModal 
          isOpen={showModal} 
          onClose={closeModal} 
          material={selectedMaterial} 
        />
      )}
    </div>
  );
}

export default Materials;
