import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './ModalComponent.css';

const ModalComponent = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>Scrolling Long Content Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Long content to enable scrolling */}
        <div className="modal-body-content">
          <p>Woohoo, you're reading this text in a modal! </p>
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>This is some long content... {i + 1}</p>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
