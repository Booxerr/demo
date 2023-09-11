import React, { useState } from "react";
import "./Table.css";
import { Button } from "@mui/material";
import {
  deleteStaff,
  getStaff,
  removeRoleSalesManager,
  removeRoleSalesPurchaseManager,
  removeRoleStoreManager,
} from "../../http";
import { staffActions } from "../../store/staffSlice";
import { useDispatch, useSelector } from "react-redux";

function TableRow({ id, mobile, name, role, removeRole }) {
  const [showBtn, setShowBtn] = useState(false);

  const onDelete = async () => {
    if (window.confirm(`You Really want to delete ${name}`)) {
      await deleteStaff(id);
    }
  };

  return (
    <tr
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <td>{name}</td>
      <td>{mobile}</td>
      <td>{role}</td>

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
                onClick={removeRole}
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
                onClick={onDelete}
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

function Table({ data }) {
  const dispatch = useDispatch();
  const activeStore = useSelector((state) => state.dashboardSlice.activeStore);
  const fetchStoreStaff = async () => {
    const data = await getStaff(activeStore);
    console.log(data.data);
    console.log();

    dispatch(
      staffActions.setStoreStaff({
        store: data.data.storeId,
        data: {
          ...data.data,
        },
      })
    );
  };
  const removeRoleSalesPurchaseManagerAccess = async (
    salePurchaseManagerId,
    staffId
  ) => {
    console.log({ salePurchaseManagerId, staffId });
    const res = await removeRoleSalesPurchaseManager(
      salePurchaseManagerId,
      staffId
    );
    console.log({ res });
  };

  const removeRoleSalesManagerAccess = async (salesManagerId, staffId) => {
    console.log({ salesManagerId, staffId });
    const res = await removeRoleSalesManager(salesManagerId, staffId);
    console.log({ res });
  };

  const removeRoleStoreManagerAccess = async (storeManagerId, staffId) => {
    console.log({ storeManagerId, staffId });
    const res = await removeRoleStoreManager(storeManagerId, staffId);
    console.log({ res });
  };

  return (
    <table className="table">
      <tr>
        <th className="name">Staff</th>
        <th className="num">Mobile Number</th>
        <th className="role">Role</th>
        <th></th>
      </tr>
      {data?.storeManagerModels.map((el) => (
        <TableRow
          removeRole={() => {
            removeRoleStoreManagerAccess(
              el.storeManagerId,
              el.staffModel.staffId
            );
            fetchStoreStaff();
          }}
          staffid={el.staffModel.staffId}
          key={el.staffModel.staffId}
          mobile={el.staffModel.mobile}
          name={el.staffModel.name}
          role="Store Manager"
        />
      ))}
      {data?.salesPurchaseManagerModels.map((el) => (
        <TableRow
          removeRole={() => {
            removeRoleSalesPurchaseManagerAccess(
              el.salePurchaseManagerId,
              el.staffModel.staffId
            );
            fetchStoreStaff();
          }}
          staffid={el.staffModel.staffId}
          key={el.staffModel.staffId}
          mobile={el.staffModel.mobile}
          name={el.staffModel.name}
          role="Sales Purchase Manager"
        />
      ))}
    </table>
  );
}

export default Table;
