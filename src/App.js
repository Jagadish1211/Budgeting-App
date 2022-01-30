import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./Components/AppBar";
import { Col, Container, Button, Modal, Form } from "react-bootstrap";
import BudgetCard from "./Components/BudgetCard";
import React, { useState } from "react";
import AddCategoryModal from "./Modals/AddCategoryModal";
import AddExpensesModal from "./Modals/AddExpensesModal";

function App() {
  const default_categories = [
    { name: "Food", max_spending: 100 ,expenses:{}},
    { name: "Housing and Maintainence", max_spending: 100,expenses:{} },
    { name: "Transport", max_spending: 100,expenses:{} },
    { name: "Entertainment", max_spending: 100,expenses:{} },
  ];

  const [categories, setCategories] = useState(default_categories);
  const [showAddCategory, setShowAddCategory] = useState(false);
  
  /*For adding the inputs from modal to the array of categories */

  function AddNewCategorytoList(newcategory, spendinglimit) {
    let existingcategories = [...categories];
    existingcategories.push({
      name: newcategory,
      max_spending: spendinglimit,
    });
    setCategories(existingcategories);
  }

  /*For showing up modal for adding categories of budget*/
  function AddCategory() {
    setShowAddCategory(true);
  }

  function HandleClose() {
    setShowAddCategory(false);
  }

  var expenseaddstatus
  function ExpenseAdditionModal(showAddExpenseModal,HideAddExpensesModal,expenseaddstatus) {
     expenseaddstatus = showAddExpenseModal;
    
  }

  return (
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
      />
      <AddExpensesModal
      showaddexpensemodal={expenseaddstatus}
      //hideaddexpensesmodal ={}
      />
      <div>
        {categories.map((category, index) => (
          <div className="budgetcard">
            <BudgetCard
              key={index}
              id = {index}
              categoryname={category.name}
              max_spending={category.max_spending}
              sendexpensemodaldata = {ExpenseAdditionModal}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default App;
