import React, { useContext } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { expenseModalContext } from "../App";

function Listitem(props) {
  const { setExpenseIDtoDel, setID, Delexpense, expenseIDtoDel, ID } =
    useContext(expenseModalContext);

  function SelectExpensetoDel() {
    setExpenseIDtoDel(props.index);
    setID(props.categoryIDofExpense);
    Delexpense(expenseIDtoDel, ID);
    console.log("clicked")
  }
  

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* {props.index === 0 ? ( */}
            <TableHead>
              <TableRow style={props.index===0?{visibility:"hidden"}:null}>
                <TableCell>
                  <div className="Listitem">Expenses</div>
                </TableCell>
                <TableCell align="center">
                  <div className="Listitem">Amount</div>
                </TableCell>
                <TableCell align="center">
                  <div className="Listitem">Delete item</div>
                </TableCell>
                <TableCell align="center">
                  <div className="Listitem">Edit Item</div>
                </TableCell>
              </TableRow>
            </TableHead>
           {/* ) : null} */}

          <TableBody>
            <TableRow
              key={props.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {props.name}
              </TableCell>
              <TableCell align="center">{props.amt}</TableCell>
              <TableCell align="center">
                <div onClick={SelectExpensetoDel}>
                  <DeleteOutlineIcon />
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <EditIcon />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Listitem;
