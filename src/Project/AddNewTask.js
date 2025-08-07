import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function AddNewTask({
  openstatue,
  FunctionhandleClose,
  FunctionAddTask,
}) {
  const handleClose = () => {
    FunctionhandleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    FunctionAddTask(formJson);

    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog open={openstatue} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>
          اضافة مهمة جديدة{" "}
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="Titel"
              name="Titel"
              label="عنوان المهمة:"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="des"
              name="des"
              label="الوصف:"
              type="text"
              fullWidth
              variant="standard"
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                startIcon={<AddTaskIcon></AddTaskIcon>}
                type="submit"
                variant="contained"
                style={{ background: "  " }}
              >
                Add
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
