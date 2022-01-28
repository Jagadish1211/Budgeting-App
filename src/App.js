import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import { Col, Container, Button } from 'react-bootstrap'; 
import BudgetCard from './Components/BudgetCard';
import React , {useState} from "react";

function App() {

const default_categories = [{name:"Food",max_spending:100},
                            {name:"Housing and Maintainence",max_spending:100},
                            {name:"Transport",max_spending:100},
                            {name:"Entertainment",max_spending:100}]

const [categories,setCategories] = useState(default_categories)



  return (
    <Container>
      <row>
        <Col>
          <AppBar />
        </Col>
        </row>
        <div className='Add-categoryButton'>
            <Button variant="outline-secondary" size="sm">Add Category</Button>
        </div>
        <div >
        {categories.map((category)=> <div className='budgetcard'>
          <BudgetCard categoryname={category.name} max_spending={category.max_spending }/>
          </div>
            )}
        </div>
        
          
        
    </Container>
  );
}

export default App;
