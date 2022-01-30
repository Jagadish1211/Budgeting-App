import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function AddCategoryModal(props) {
  const [newcategory, setNewcategory] = useState();
  const [spendinglimit, setSpendinglimit] = useState();

  function NewCategory(Event) {
    setNewcategory((prevValue) => Event.target.value);
  }

  function SpendingLimit(Event) {
    setSpendinglimit((prevValue) => Event.target.value);
  }

  function Sendvalues() {
    props.sentvalues(newcategory, spendinglimit);
  }

  return (
    <div>
      <Modal show={props.showaddcategory} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                onChange={NewCategory}
                placeholder="Enter category name"
              />
            </Form.Group>
            <Form>
              <Form.Group>
                <Form.Label>Maximum Spending Limit</Form.Label>
                <Form.Control
                  onChange={SpendingLimit}
                  placeholder="In Rupees"
                ></Form.Control>
              </Form.Group>
            </Form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={Sendvalues}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategoryModal;
