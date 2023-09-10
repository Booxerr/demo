import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav_item">Party</div>
      <div className="nav_item">All Entries & Bill</div>
      <div className="nav_item">Stock</div>
      <div className="nav_item">Item</div>
      <div className="nav_item">Reports</div>
      <div className="nav_item  nav_item_active">Manage Staff</div>
      <div className="nav_item">Setting</div>
      <div className="nav_item">Paid Plan</div>
      <div className="nav_item">Help & Support</div>
    </nav>
  );
}

export default Nav;
