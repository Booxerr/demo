import React, { useState } from "react";
import "./Table.css";
import { Button } from "@mui/material";

function TableRow() {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <tr
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <td>Germany</td>
      <td>+19932154785</td>
      <td>Sales Operator</td>

      <td className="table_buttons">
        {showBtn && (
          <>
            <div className="table_button">
              <Button
                style={{ color: "black", borderColor: "black" }}
                variant="outlined"
              >
                Change Role
              </Button>
            </div>
            <div className="table_button">
              <Button
                style={{ color: "black", borderColor: "black" }}
                variant="outlined"
              >
                Remove Role
              </Button>
            </div>
            <div className="table_button">
              <Button
                style={{ color: "black", borderColor: "black" }}
                variant="outlined"
              >
                Rename Staff
              </Button>
            </div>
            <div className="table_button">
              <Button
                variant="outlined"
                style={{ color: "red", borderColor: "red" }}
              >
                Delete Staff
              </Button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
}
function Table() {
  return (
    <table className="table">
      <tr>
        <th className="name">Staff</th>
        <th className="num">Mobile Number</th>
        <th className="role">Role</th>
        <th></th>
      </tr>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </table>
  );
}

export default Table;
