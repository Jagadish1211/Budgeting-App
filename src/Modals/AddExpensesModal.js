import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { expenseModalContext } from "../App";

function AddExpensesModal(props) {
  const { getter, modalhide, setExpenseName, setExpenseAmt, ID } =
    useContext(expenseModalContext);

  function Expensedesc(Event) {
    setExpenseName(Event.target.value);
  }

  function ExpenseAmount(Event) {
    setExpenseAmt(Event.target.value);
  }
  return (
    <div className="modalexs">
      <Modal show={getter} onHide={modalhide}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="expenseDesc"
                onChange={Expensedesc}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="expenseAmt"
                onChange={ExpenseAmount}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.addexpense(ID)}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddExpensesModal;
