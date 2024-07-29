import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file
import FormComponent from './Components/FormComponent';
import ModalComponent from './Components/ModalComponent';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2500); // Show modal after 2.5 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-flex">
      <FormComponent />
      <ModalComponent showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default App;
