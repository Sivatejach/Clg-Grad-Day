import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalComponent.css';
import graduationImage from '../assets/18433.jpg'; // Adjust the path as necessary

const ModalComponent = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Graduation Day</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-content">
          <img src={graduationImage} alt="Graduation Day" className="graduation-image" />
        </div>
      </Modal.Body>
      
    </Modal>
  );
};

export default ModalComponent;
