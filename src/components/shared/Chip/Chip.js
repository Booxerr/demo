import React from "react";
import "./Chip.css";
function Chip({ activate, label }) {
  return <div className={`chip ${activate && "chip_activate"}`}>{label}</div>;
}

export default Chip;
