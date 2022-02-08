import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./Components/AppBar";
import { Col, Container, Button } from "react-bootstrap";
import BudgetCard from "./Components/BudgetCard";
import React, { useState, createContext, useEffect } from "react";
import AddCategoryModal from "./Modals/AddCategoryModal";
import AddExpensesModal from "./Modals/AddExpensesModal";
import ViewExpenseList from "./Components/ExpenseListAccordion";

//this context also handles expenses
export const expenseModalContext = createContext();

function App() {
  const default_categories = [
    { name: "Food", max_spending: 100, expenses: [] },
    { name: "Housing and Maintainence", max_spending: 100, expenses: [] },
    { name: "Transport", max_spending: 100, expenses: [] },
    { name: "Entertainment", max_spending: 100, expenses: [] },
  ];
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [categories, setCategories] = useState(default_categories);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [expenseName, setExpenseName] = useState();
  const [expenseAmt, setExpenseAmt] = useState();
  const [ID, setID] = useState();
  const [expenseIDtoDel,setExpenseIDtoDel] = useState()

  /*For adding the inputs from modal to the array of categories */

  function AddNewCategorytoList(newcategory, spendinglimit) {
    let existingcategories = [...categories];
    existingcategories.push({
      name: newcategory,
      max_spending: spendinglimit,
    });
    setCategories(existingcategories);
    HandleClose()
  }

  /*For showing up modal for adding categories of budget*/
  function AddCategory() {
    setShowAddCategory(true);
  }

  function HandleClose() {
    setShowAddCategory(false);
  }

  function HideAddExpensesModal() {
    setShowAddExpenseModal(false);
  }

  /*Adding expenses to a particular category*/

  function Addexpensetocategory(ID) {
    let existingcategories = [...categories];
    existingcategories[ID].expenses.push({
      Expense: expenseName,
      Amount: expenseAmt,
    });
    setCategories(existingcategories);
    HideAddExpensesModal();
  }
  useEffect(()=>{setExpenseAmt();
  setExpenseName()},[categories])

  function Delexpense(expenseIDtoDel,ID){
    let existingcategories = [...categories];
    existingcategories[ID].expenses.pop(expenseIDtoDel);
    setCategories(existingcategories);
    console.log(existingcategories[ID].expenses)
  }

  function DeleteCategory(itemindex) {
    let existingcategories = [...categories];
    console.log(itemindex);
    setCategories(existingcategories.filter((cat,index) => itemindex !== index))
    HandleClose()
  }

  return (
    <expenseModalContext.Provider
      value={{
        getter: showAddExpenseModal,
        setter: setShowAddExpenseModal,
        modalhide: HideAddExpensesModal,
        setExpenseName,
        setExpenseAmt,
        setID,
        ID,
        categories,
        setExpenseIDtoDel,
        Delexpense
      }}
    >
      <Container fluid="md">
        <row>
          <Col>
            <AppBar />
          </Col>
        </row>
        <div className="Add-categoryButton">
          <Button onClick={AddCategory} variant="outline-secondary" size="sm">
            Add Category
          </Button>
        </div>
        <AddCategoryModal
          addCategory={AddCategory}
          showaddcategory={showAddCategory}
          handleclose={HandleClose}
          sentvalues={AddNewCategorytoList}
          s
        />
        <AddExpensesModal addexpense={Addexpensetocategory} />
        <div>
          {categories.map((category, index) => (
            <div className="budgetcard">
              <BudgetCard
                key={index}
                id={index}
                categoryname={category.name}
                max_spending={category.max_spending}
                delcategory={DeleteCategory}
                // sendexpensemodaldata = {ExpenseAdditionModal}
              />
            </div>
          ))}
        </div>
      </Container>
    </expenseModalContext.Provider>
  );
}

export default App;
