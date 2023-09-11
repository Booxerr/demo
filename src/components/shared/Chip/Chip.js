import React, { memo } from "react";
import "./Chip.css";
import { useDispatch } from "react-redux";
import { dashboardActions } from "../../../store/dashboardSlice";

function Chip({ activate, label, storeId }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(dashboardActions.setActiveStore(storeId))}
      className={`chip ${activate && "chip_activate"}`}
    >
      {label}
    </div>
  );
}

export default memo(Chip);
