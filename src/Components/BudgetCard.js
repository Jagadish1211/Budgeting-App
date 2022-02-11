import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, ProgressBar } from "react-bootstrap";
import { expenseModalContext } from "../App";
import { ViewExpenseList } from "./ExpenseListAccordion";

function BudgetCard(props) {
  // const user = useContext(expenseModalContext)
  const { setter, setID, categories } = useContext(expenseModalContext);

  function Addingexpensefunction() {
    setter(true);
    setID(props.id);
    //console.log(ID)
  }

  const [expenseAccordionStatus, setExpenseAccordionStatus] = useState(false);
  const changeAccordionStatus = () =>
    setExpenseAccordionStatus((prevValue) => !prevValue);

  let total = 0;
  if (categories[props.id].expenses) {
    categories[props.id].expenses.forEach(
      (exp) => (total = parseInt(exp.Amount) + total)
    );
  }

  const progress = (total * 100) / [props.max_spending];

  return (
    <Card>
      <div className="BudgetCard-inside">
        <Card.Title>{props.categoryname}</Card.Title>
        <div>
          <div>
            Rs {total} / Rs {props.max_spending}
          </div>
        </div>
      </div>
      <div className="progressbar">
        <ProgressBar
          variant={progress > 80 ? "danger" : "info"}
          now={progress}
        ></ProgressBar>
      </div>
      <div className="cardbuttons">
        <Button
          onClick={() => Addingexpensefunction(props.id)}
          variant="outline-secondary"
          size="sm"
        >
          Add Expense
        </Button>
        <Button
          onClick={changeAccordionStatus}
          variant="outline-secondary"
          size="sm"
        >
          View Expense
        </Button>
        <Button
          onClick={() => props.delcategory(props.id)}
          variant="outline-secondary"
          size="sm"
        >
          Delete Category
        </Button>
        <Button
          onClick={() => props.editcategory(props.id)}
          variant="outline-secondary"
          size="sm"
        >
          Edit Category
        </Button>
      </div>
      <ViewExpenseList
        className="expenseAccordion"
        key_id={props.id}
        status={expenseAccordionStatus}
      />
    </Card>
  );
}

export default BudgetCard;
