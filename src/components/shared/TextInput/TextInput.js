import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";

function TextInput({ label, w, value, onChange }) {
  return (
    <div
      style={{
        margin: "5px",
        width: w ? w : "53%",
      }}
      className="textInput"
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
        <OutlinedInput
          onChange={onChange}
          value={value}
          fullWidth
          placeholder="Enter here"
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </div>
  );
}

export default TextInput;
