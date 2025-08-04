import "../styles/Project.css";
import MenuGroup from "./MenuGroup";
import SelectTasks from "./SelectTasks";
import { lightBlue, lightGreen, purple, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import AddNewTask from "./AddNewTask";
import NOData from "./NoData";
import ALLTASKS from "./ALLTasks";
import Complted from "./Completed";
import NotCompleted from "./NotCompleted";
export default function ToDoList(params) {
  // State & function For Open Close Dea Page:
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickclose = () => {
    setOpen(false);
  };
  // State & function For Add Tasks:
  const [Tasks, SetTASKS] = useState([
    {
      Titel: "Completed",
      des: "test,",
      state: true,
      id: Date.now(),
    },
    {
      Titel: "notcopleted",
      des: "test,",
      state: false,
      id: Date.apply(),
    },
  ]);

  //ADD TASK IN Statae:
  function AddTask(Value) {
    SetTASKS([
      ...Tasks,
      {
        Titel: Value.Titel,
        des: Value.des,
        state: false,
        id: Date.now(),
      },
    ]);
  }

  //state for filter:
  const [filter, setfliter] = useState("ALL"); // ALL, Cpmleted , Not Completed

  function Result(params) {
    if (filter == "ALL") {
      return (
        <>
          <ALLTASKS Datat={Tasks} SetDATA={SetTASKS}></ALLTASKS>
        </>
      );
    } else {
      if (filter == "Cpmleted") {
        return <Complted Datat={Tasks} SetDATA={SetTASKS}></Complted>;
      } else {
        return <NotCompleted Datat={Tasks} SetDATA={SetTASKS}></NotCompleted>;
      }
    }
  }

  function EditeFilter(value) {
    setfliter(value);
  }

  //them of project:
  const themp = createTheme({
    palette: {
      primary: {
        main: purple[900],
      },
      secondary: {
        main: lightBlue[900],
      },
      success: {
        main: lightGreen[400],
      },
      info: {
        main: "rgb(255, 255, 255)",
      },
      warning: {
        main: red[700],
      },
    },
  });
  

  return (
    <ThemeProvider theme={themp}>
      <div className="Todo">
        <div className="ToDocontenet">
          <div
            className="menu"
        
          >
            <MenuGroup functionEditeFilter={EditeFilter} filter={filter} />

            <Button
              color="secondary"
              style={{ borderRadius: "0px 0px 0px 7px" }}
              variant="contained"
            >
              Contained
            </Button>
          </div>
          <div className="ContentTasks">
            <div className="c">
              <div
                className="ContentTasksTop"
                style={{
                  position: "sticky",
                  top: "-1px",
                  right: "0px",
                  zIndex: "2",
                  paddingLeft: "7px",
                  marginBottom: "7px",
                }}
              >
                <SelectTasks  state={filter}></SelectTasks>
              </div>

              <div className="ContentTasksBody">
                {Tasks.length >= 1 ? <Result></Result> : <NOData></NOData>}
              </div>
            </div>

            <div className="ContentTasksBottum">
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handleClickOpen}
                >
                  {" "}
                  add new task
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddNewTask
        openstatue={open}
        FunctionhandleClose={handleClickclose}
        FunctionAddTask={AddTask}
      ></AddNewTask>
    </ThemeProvider>
  );
}
