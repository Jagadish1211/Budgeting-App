import React,{useContext} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AccordionSummary } from "@mui/material";
import { expenseModalContext } from "../App.js";
import Listitem from "./ExpenseTable.js";

function ViewExpenseList(props) {
  const {categories,setID} = useContext(expenseModalContext)

  return (
    <Accordion expanded={props.status}>
      <div className="AccordionSummary">
        <AccordionSummary></AccordionSummary>
      </div>
      <AccordionDetails>                                                                
      {categories[props.key_id].expenses?categories[props.key_id].expenses.map((e,index)=><Listitem key={index} categoryIDofExpense={props.key_id} id={index} name={e.Expense} amt={e.Amount} />):null}
      </AccordionDetails>
    </Accordion>
  );
}

export { ViewExpenseList };
