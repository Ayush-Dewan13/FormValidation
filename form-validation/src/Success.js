import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css'; // Importing Success.css

const Success = () => {
  const { state } = useLocation();
  const { formData } = state;

  return (
    <div className="container success-container">
      <h1>Form Submitted Successfully</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Success;
