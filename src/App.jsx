import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file
import FormComponent from './Components/FormComponent';
import ModalComponent from './Components/ModalComponent';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-flex">
      <FormComponent />
      <ModalComponent showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default App;
