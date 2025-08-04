import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

import EdetTasks from "./EdetTasks";
/* icons  */
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Button } from "@mui/material";
import { useState } from "react";

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
    functiondelet(IdTask);
  };
  const edetstate = () => {
    functionedetstate(IdTask);
  };
  const hendelopen = () => {
    setope(true);
  };

  return (
    <>
      <Card
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
            <Checkbox
              {...label}
              onClick={(e) => {
                edetstate();
              }}
              checked={statue}
              icon={
                <CheckCircleOutlineOutlinedIcon
                  fontSize="medium"
                  color="info"
                />
              }
              checkedIcon={<CheckCircleIcon color="success" />}
            />

            <Button
              {...label}
              onClick={() => {
                hendelopen();
              }}
              startIcon={<EditOutlinedIcon color="info" fontSize="medium" />}
            />
            <Checkbox
              {...label}
              onClick={() => {
                deletTask();
              }}
              icon={<DeleteOutlineRoundedIcon color="info" fontSize="medium" />}
              checkedIcon={<DeleteRoundedIcon color="error" />}
            />
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
            EdetTaskState(IdTask,value);
          }}
        ></EdetTasks>
      ) : (
        <></>
      )}
    </>
  );
}
