import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextInput from "../TextInput/TextInput";
import DropDown from "../DropDown/DropDown";
import "./PopupCard.css";

const roleMenu = [
  { id: 0, name: "Store Admin,0" },
  { id: 1, name: "Sales Operator,1" },
  { id: 3, name: "Sales Purchase Operator,2" },
];

const roleData = [
  {
    title: "Store Admin Permissions -",
    instructions: [
      "View all entries & download reports",
      "Add, edit, delete any type of entry",
      "View total sale, purchase",
      "View all added items, add new item, edit item, delete item",
      "Add new party, view all added parties and their entries",
      "Download & share all reports, bills",
    ],
  },
  {
    title: "Sale Operator Permissions -",
    instructions: [
      "View all entries & download reports",
      "Add, edit, delete any type of entry",
      "View total sale, purchase",
      "View all added items, add new item, edit item, delete item",
      "Add new party, view all added parties and their entries",
      "Download & share all reports, bills",
    ],
  },
  {
    title: "Sale Purchase Operator Permissions",
    instructions: [
      "View all entries & download reports",
      "Add, edit, delete any type of entry",
      "View total sale, purchase",
      "View all added items, add new item, edit item, delete item",
      "Add new party, view all added parties and their entries",
      "Download & share all reports, bills",
    ],
  },
];

function PopupCard() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("+91");
  const [store, setStore] = useState("");
  const [role, setRole] = useState(null);

  const storesList = useSelector((state) => state.storesSlice);

  const storesMenu = useMemo(() => {
    return storesList?.stores?.map((item) => ({
      id: item.storeId,
      name: `${item.name},${item.storeId}`,
    }));
  }, [storesList]);

  useEffect(() => {
    console.log(storesMenu);
  }, [storesMenu]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelSave = () => {
    const formData = {
      name,
      code,
      store,
      role,
      number,
    };
    console.log(formData);
    handleClose();
  };

  return (
    <div className="popupCard">
      <Button variant="contained" onClick={handleClickOpen}>
        Add Staff
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="popupCard_header">
          <p style={{ fontFamily: "Roboto" }}>Add Staff</p>
          <IconButton onClick={handleClose} aria-label="delete">
            <CloseIcon />
          </IconButton>
        </div>
        <div className="popupCard_wrapper">
          <div className="popupCard_content">
            <div className="popupCard_row">
              <TextInput
                value={name}
                onChange={(el) => {
                  setName(el.target.value);
                }}
                label="Staff Name*"
              />
              <div className="popupCard_innerRow">
                <TextInput
                  value={code}
                  onChange={(el) => {
                    setCode(el.target.value);
                  }}
                  w="20%"
                  label="Code*"
                />
                <TextInput
                  value={number}
                  onChange={(el) => {
                    setNumber(el.target.value);
                  }}
                  w="75%"
                  label="Mobile Number*"
                />
              </div>
            </div>
            <div className="popupCard_row">
              <DropDown
                value={store}
                onChange={(el) => {
                  setStore(el.target.value);
                  console.log(el.target.value);
                }}
                menu={storesMenu}
                label="Select Store"
              />
              <DropDown
                menu={roleMenu}
                value={role}
                onChange={(el) => {
                  setRole(el.target.value);
                  console.log(el.target.value);
                }}
                label="Select Role"
              />
            </div>
            {role && (
              <div className="popupCard_text">
                <p>{roleData[role.split(",")[1] * 1].title}</p>
                <ul>
                  {roleData[role.split(",")[1] * 1].instructions.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="popupCard_actions">
            <div className="popupCard_actionsBtnWrapper">
              <Button
                fullWidth
                onClick={handleClose}
                variant="outlined"
                style={{ color: "blue", borderColor: "blue" }}
              >
                Cancel
              </Button>
            </div>
            <div className="popupCard_actionsBtnWrapper">
              <Button
                onClick={handelSave}
                disabled={
                  name === "" ||
                  number === "" ||
                  store === "" ||
                  code === "" ||
                  role === null
                }
                fullWidth
                variant="contained"
                style={{ color: "white", borderColor: "blue" }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default PopupCard;
