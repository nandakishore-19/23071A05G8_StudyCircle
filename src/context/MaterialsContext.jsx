import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const MaterialsContext = createContext();

// Create a provider component
export const MaterialsProvider = ({ children }) => {
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Introduction to React', subject: 'Web Development', type: 'PDF', price: 9.99 },
    { id: 2, title: 'Advanced Mathematics', subject: 'Mathematics', type: 'PDF', price: 14.99 },
    { id: 3, title: 'History of Science', subject: 'Science', type: 'Video', price: 19.99 },
    { id: 4, title: 'Data Structures & Algorithms', subject: 'Computer Science', type: 'PDF', price: 24.99 },
    { id: 5, title: 'Fundamentals of Economics', subject: 'Economics', type: 'PDF', price: 12.99 },
    { id: 6, title: 'English Literature Classics', subject: 'Literature', type: 'eBook', price: 7.99 },
  ]);

  // Load materials from localStorage on component mount
  useEffect(() => {
    const savedMaterials = localStorage.getItem('materials');
    if (savedMaterials) {
      setMaterials(JSON.parse(savedMaterials));
    }
  }, []);

  // Save materials to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('materials', JSON.stringify(materials));
  }, [materials]);

  // Add new material
  const addMaterial = (material) => {
    const newMaterial = {
      ...material,
      id: materials.length > 0 ? Math.max(...materials.map(m => m.id)) + 1 : 1,
      price: parseFloat(material.price)
    };
    setMaterials([...materials, newMaterial]);
    return newMaterial;
  };

  return (
    <MaterialsContext.Provider value={{ materials, addMaterial }}>
      {children}
    </MaterialsContext.Provider>
  );
};

// Custom hook for using the materials context
export const useMaterials = () => useContext(MaterialsContext);

export default MaterialsContext;
