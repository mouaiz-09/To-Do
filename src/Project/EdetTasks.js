import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditSquareIcon from "@mui/icons-material/EditSquare";

export default function EdetTasks({
  openstatue,
  FunctionhandleClose,
  FunctionedetTask,
  titel,
  des,
}) {
  const handleClose = () => {
    FunctionhandleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.id;
    console.log(email);
    FunctionedetTask(formJson);

    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog open={openstatue} onClose={handleClose}>
        <h1 style={{ padding: "5px 20px" }}>
          Task:<span style={{ color: "red", margin: "0" }}>{titel}</span>
        </h1>{" "}
        <DialogContent sx={{ paddingBottom: 0 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="Titel"
              name="Titel"
              label="عنوان المهمة"
              type="text"
              fullWidth
              variant="standard"
              placeholder={titel}
              focused
            />
            <TextField
              focused
              margin="dense"
              id="des"
              name="des"
              label="الوصف"
              type="text"
              fullWidth
              variant="standard"
              placeholder={des}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                startIcon={<EditSquareIcon />}
                type="submit"
                variant="contained"
                style={{ background: "  " }}
              >
                edite
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
