import React, { useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { expenseModalContext } from "../App.js";

function AddCategoryModal(props) {
  const {
    EdittingCategory,
    setNewcategory,
    setSpendinglimit,
    AddNewCategorytoList,
    newcategory,
    spendingLimit,
    AddEdittedCategory,
  } = useContext(expenseModalContext);

  function NewCategory(Event) {
    setNewcategory(Event.target.value);
  }

  function SpendingLimit(Event) {
    setSpendinglimit(Event.target.value);
  }

  return (
    <div>
      <Modal show={props.showaddcategory} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {EdittingCategory ? "Edit Category" : "New Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                onChange={NewCategory}
                placeholder={EdittingCategory ? "Edit Category" : "Enter category name"}
                value={newcategory}
              />
            </Form.Group>
            <Form>
              <Form.Group>
                <Form.Label>Maximum Spending Limit</Form.Label>
                <Form.Control
                  onChange={SpendingLimit}
                  placeholder="In Rupees"
                  value={spendingLimit}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              EdittingCategory ? AddEdittedCategory : AddNewCategorytoList
            }
          >
            {EdittingCategory ? "Edit" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategoryModal;
