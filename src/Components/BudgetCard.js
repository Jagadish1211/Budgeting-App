import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, ProgressBar } from "react-bootstrap";
import { expenseModalContext } from "../App";
import { ViewExpenseList } from "./ExpenseListAccordion";
import { CustomToggle } from "./ExpenseListAccordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function BudgetCard(props) {
  // const user = useContext(expenseModalContext)
  const { setter, setID } = useContext(expenseModalContext);
  const progress = 50;

  function Addingexpensefunction() {
    setter(true);
    setID(props.id);
    //console.log(ID)
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
          onClick={() => Addingexpensefunction(props.id)}
          variant="outline-secondary"
          size="sm"
        >
          Add Expense
        </Button>
        <Button variant="outline-secondary" size="sm">
          View Expense
        </Button>
        <Button onClick={()=>props.delcategory(props.id)} variant="outline-secondary" size="sm">
          Delete Category
        </Button>
      </div>
      <ViewExpenseList />
    </Card>
  );
}

export default BudgetCard;
