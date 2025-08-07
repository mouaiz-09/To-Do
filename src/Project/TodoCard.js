import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import EdetTasks from "./EdetTasks";
import Delet from "./Delet";
import "../styles/Project.css";
//delet
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//=======================delet========
/* icons  */
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TodoCard({
  Titel = "....",
  des = "~~~~~~~",
  statue,
  IdTask,
  functiondelet,
  functionedetstate,
  EdetTaskState,
}) {
  const [open, setope] = useState(false);

  const deletTask = () => {
    //functiondelet(IdTask);
    handleClickOpen();
  };
  const edetstate = () => {
    functionedetstate(IdTask);
  };
  const hendelopen = () => {
    setope(true);
  };

  //function confirem delet tasks
  const [openConfirem, setOpenConfrem] = React.useState(false);

  const handleClickOpen = () => {
    setOpenConfrem(true);
  };

  const handleClose = () => {
    setOpenConfrem(false);
  };
  const handleDelet = () => {
    functiondelet(IdTask);
    setOpenConfrem(false);
  };
  function DeletF() {
    return (
      <>
        <Dialog
          open={openConfirem}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{ direction: "rtl" }}>
            {"هل تريد حذف هذه المهمة؟؟"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <span>"{Titel}"</span>" يؤدي هذا الفعل الى حذف
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>الغاء</Button>
            <Button
              onClick={handleDelet}
              variant="contained"
              color="warning"
              autoFocus
            >
              حذف
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Card
        className="card"
        style={{
          width: "100% ",
          background: statue ? "green" : "red",
          maxHeight: "100px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography sx={{ color: "whitesmoke", fontSize: 20 }}>
            {" "}
            {Titel}{" "}
          </Typography>
          <Typography
            fontSize={10}
            style={{ color: "rgba(233, 233, 234, 0.73)" }}
          >
            {des}
          </Typography>
        </CardContent>
        <CardActions>
          <div>
            {/* ==Btn Copleted==*/}
            <Checkbox
              className="Btn"
              {...label}
              onClick={(e) => {
                edetstate();
              }}
              checked={statue}
              icon={
                <CheckCircleOutlineOutlinedIcon
                  fontSize="medium"
                  style={{
                    background: "rgb(255, 255, 255)",
                    color: "#8bc349",
                    borderRadius: "50%",
                  }}
                />
              }
              checkedIcon={<CheckCircleIcon color="success" />}
            />
            {/* ========Btn Copleted==============*/}

            {/*==Btn Edite==*/}
            <Checkbox
              className="Btn"
              {...label}
              onClick={() => {
                hendelopen();
              }}
              checked={open}
              checkedIcon={
                <ModeEditOutlinedIcon
                  fontSize="medium"
                  style={{
                    background: "#1769aa",
                    color: "rgb(255, 255, 255)",
                    borderRadius: "50%",
                    border: "1px solid rgb(255, 255, 255) ",
                    padding: "1px",
                  }}
                />
              }
              icon={
                <ModeEditOutlinedIcon
                  fontSize="medium"
                  style={{
                    background: "rgb(255, 255, 255)",
                    color: "#1769aa",
                    borderRadius: "50%",
                    border: "1px solid #1769aa ",
                    padding: "1px",
                  }}
                />
              }
            />
            {/* ========Btn Edite==============*/}
            {/*==Btn Delet==*/}
            <Checkbox
              className="Btn"
              {...label}
              onClick={() => {
                deletTask();
              }}
              icon={
                <DeleteOutlineRoundedIcon
                  fontSize="medium"
                  style={{
                    background: "rgb(255, 255, 255)",
                    color: "#b23c17",
                    borderRadius: "50%",
                    border: "1px solid #b23c17 ",
                    padding: "1px",
                  }}
                />
              }
              checkedIcon={<DeleteRoundedIcon color="error" />}
            />

            {/* ========Btn Delet==============*/}
          </div>
        </CardActions>
      </Card>
      {open ? (
        <EdetTasks
          openstatue={open}
          FunctionhandleClose={() => setope(false)}
          titel={Titel}
          des={des}
          FunctionedetTask={(value) => {
            EdetTaskState(IdTask, value);
          }}
        ></EdetTasks>
      ) : (
        <></>
      )}
      <DeletF open />
    </>
  );
}
