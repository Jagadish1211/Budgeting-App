import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignInSide from './Pages/SignInPage';
import SignUp from './Pages/SignUpPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/SignIn" element={<SignInSide />}></Route>
     <Route index  element= {<App />}></Route>
     <Route path="/SignUp" element={<SignUp />}></Route>
  </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

