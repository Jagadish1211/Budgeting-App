import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddExpensesModal(props) {
  return (
    <div>
      <Modal show={props.showaddexpensemodal} onHide={props.hideaddexpensesmodal}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Add</Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default AddExpensesModal;
