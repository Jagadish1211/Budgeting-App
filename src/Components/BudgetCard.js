import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, ProgressBar } from "react-bootstrap";

function BudgetCard(props) {
  const progress = 50;
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  function Addingexpensefunction() {
    setShowAddExpenseModal(true);
  }

  function HideAddExpensesModal() {
    setShowAddExpenseModal(false);
  }

  useEffect(()=>{
    props.expensemodaldata(showAddExpenseModal,HideAddExpensesModal)
  },[showAddExpenseModal])

  

  return (
    <Card>
      <div className="BudgetCard-inside">
        <Card.Title>{props.categoryname}</Card.Title>
        <div>Rs _____ / Rs {props.max_spending}</div>
      </div>
      <div className="progressbar">
        <ProgressBar now={progress}></ProgressBar>
      </div>
      <div className="cardbuttons">
        <Button
          onClick={Addingexpensefunction}
          btnid={props.id}
          variant="outline-secondary"
          size="sm"
        >
          Add Expense
        </Button>
        <Button variant="outline-secondary" size="sm">
          View Expenses
        </Button>
        <Button variant="outline-secondary" size="sm">
          Delete Category
        </Button>
      </div>
    </Card>
  );
}

export default BudgetCard;
