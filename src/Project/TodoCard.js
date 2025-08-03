import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { purple } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

/* icons  */
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditOffRoundedIcon from "@mui/icons-material/EditOffRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TodoCard({
  Titel = "....",
  des = "~~~~~~~",
  statue,
  IdTask,
  functiondelet,
  functionedetstate,
}) {
  const deletTask = () => {
    functiondelet(IdTask);
  };
  const edetstate = () => {
    functionedetstate(IdTask);
  };
  return (
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
              <CheckCircleOutlineOutlinedIcon fontSize="medium" color="info" />
            }
            checkedIcon={<CheckCircleIcon color="success" />}
          />

          <Checkbox
            {...label}
            icon={<EditOutlinedIcon color="info" fontSize="medium" />}
            checkedIcon={<EditOffRoundedIcon color="warning" />}
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
  );
}
