import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./Components/AppBar";
import { Col, Container, Button } from "react-bootstrap";
import BudgetCard from "./Components/BudgetCard";
import React, { useState, createContext, useEffect } from "react";
import AddCategoryModal from "./Modals/AddCategoryModal";
import AddExpensesModal from "./Modals/AddExpensesModal";

//this context also handles expenses
export const expenseModalContext = createContext();

function App() {
  const default_categories = [];
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [categories, setCategories] = useState(default_categories);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [expenseName, setExpenseName] = useState();
  const [expenseAmt, setExpenseAmt] = useState();
  const [ID, setID] = useState();
  const [expenseIDtoDel, setExpenseIDtoDel] = useState();
  const [newcategory, setNewcategory] = useState();
  const [spendinglimit, setSpendinglimit] = useState();
  const [EdittingCategory, setEdittingCategory] = useState(false);
  const [EdittingIndex, setEdittingIndex] = useState();
  const [EdittingExpense, setEdittingExpense] = useState(false);

  /*For adding the inputs from modal to the array of categories */

  function AddNewCategorytoList() {
    let existingcategories = [...categories];
    console.log(newcategory, spendinglimit);
    existingcategories.push({
      name: newcategory,
      max_spending: spendinglimit,
      expenses: []
    });
    setCategories(existingcategories);
    HandleClose();
  }

  /*For showing up modal for adding categories of budget*/
  function AddCategory() {
    setShowAddCategory(true);
    setEdittingCategory(false);
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
  useEffect(() => {
    setExpenseAmt();
    setExpenseName();
  }, [categories]);

  function Delexpense(expenseIDtoDel, ID) {
    let existingcategories = [...categories];
    existingcategories[ID].expenses.pop(expenseIDtoDel);
    setCategories(existingcategories);
    console.log(existingcategories[ID].expenses);
  }

  // Deleting a category

  function DeleteCategory(itemindex) {
    let existingcategories = [...categories];
    console.log(itemindex);
    setCategories(
      existingcategories.filter((cat, index) => itemindex !== index)
    );
    HandleClose();
  }

  // Editting a Category

  function EditCategory(itemindex) {
    setShowAddCategory(true);
    setNewcategory(categories[itemindex].name);
    setSpendinglimit(categories[itemindex].max_spending);
    console.log(newcategory, spendinglimit);
    setEdittingCategory(true);
    setEdittingIndex(itemindex);
  }

  function AddEdittedCategory() {
    let existingcategories = [...categories];
    let expenseList = existingcategories[EdittingIndex].expenses;
    existingcategories.splice(EdittingIndex, 1, {
      name: newcategory,
      max_spending: spendinglimit,
      expenses: expenseList,
    });
    setCategories(existingcategories);
    HandleClose();
    setEdittingCategory(false);
  }
  // editting expense in a category
  function Editexpense() {
    
    let existingcategories = [...categories];
    existingcategories[ID].expenses.splice(expenseIDtoDel, 1, {
      Expense: expenseName,
      Amount: expenseAmt,
    });
    setCategories(existingcategories);
    setEdittingExpense(false);
    setShowAddExpenseModal(false)
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
        Delexpense,
        setNewcategory,
        setSpendinglimit,
        EdittingCategory,
        AddEdittedCategory,
        AddNewCategorytoList,
        Editexpense,
        EdittingExpense,
        setEdittingExpense,
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
        {categories.length===0?<div className="center">Please Add your categories</div>:null}
        <AddCategoryModal
          addCategory={AddCategory}
          showaddcategory={showAddCategory}
          handleclose={HandleClose}
          sentvaluesToedit={AddEdittedCategory}
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
                editcategory={EditCategory}
              />
            </div>
          ))}
        </div>
      </Container>
    </expenseModalContext.Provider>
  );
}

export default App;
