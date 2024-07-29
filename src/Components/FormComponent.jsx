import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormComponent = () => {
  return (
    <div className="form-container">
      <h1>React Form</h1>
      <Form>
        <Form.Group controlId="formBasicRollNumber">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control type="text" placeholder="Enter roll number" />
        </Form.Group>

        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
        <div className='btn-container'>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
