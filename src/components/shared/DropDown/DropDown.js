import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function DropDown({ label, menu, value,onChange }) {
  //   const [personName, setPersonName] = useState([]);

  //   const handleChange = (event) => {
  //     const {
  //       target: { value },
  //     } = event;
  //     setPersonName(typeof value === "string" ? value.split(",") : value);
  //   };

  return (
    <div
      style={{
        margin: "5px",
        width: "50%",
      }}
    >
      <FormControl fullWidth>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "1.05rem",
            marginBottom: "5px",
          }}
        >
          {label}
        </p>
        <Select
          fullWidth
          displayEmpty
          value={value}
          onChange={onChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <p>Select</p>;
            }

            return selected?.split(',')[0];
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {menu?.map((el) => (
            <MenuItem key={el.id} value={el.name}>
              {el.name.split(",")[0]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default DropDown;
