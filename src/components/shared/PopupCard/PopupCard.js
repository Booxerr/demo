import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./PopupCard.css";
export default function PopupCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <p>Add Staff</p>
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
        <div className="popupCard_wrapper">
      

          <div className="popupCard_content">
            <div className="popupCard_row">
              <div className="textcover">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </div>

              <div className="textcover">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="popupCard_row">
              <div className="textcover">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </div>

              <div className="textcover">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="popupCard_actions">
            <div className="popupCard_actionsBtnWrapper">
              <Button
                fullWidth
                variant="outlined"
                style={{ color: "blue", borderColor: "blue" }}
              >
                Cancel
              </Button>
            </div>
            <div className="popupCard_actionsBtnWrapper">
              <Button
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
