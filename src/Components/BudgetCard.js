import React, {useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, ProgressBar } from "react-bootstrap";
import {expenseModalContext} from "../App";

function BudgetCard(props) {
 // const user = useContext(expenseModalContext)
  const {setter,valueofID} = useContext(expenseModalContext)
  const progress = 50;
  
  function Addingexpensefunction() {
    setter(true);
    valueofID(props.id)
  }
 
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
          onClick={()=>Addingexpensefunction(props.id)}
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
