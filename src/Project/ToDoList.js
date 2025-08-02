import "../styles/Project.css";
import MenuGroup from "./MenuGroup";
import SelectTasks from "./SelectTasks";
import { lightBlue, lightGreen, purple, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TodoCard from "./TodoCard";
import Button from "@mui/material/Button";
import { useState } from "react";
import AddNewTask from "./AddNewTask";
import NOData from "./NoData";

export default function ToDoList(params) {
  // State & function For Open Close Dea Page:
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickclose = () => {
    setOpen(false);
  };
  // State & function For ADd Tasks:
  const [Tasks, SetTASKS] = useState([]);

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

  const TasksResult = Tasks.map((task) => {
    return (
      <Button fullWidth>
        <TodoCard
          key={task.id}
          Titel={task.Titel}
          des={task.des}
          statue={task.state}
          IdTask={task.id}
          functiondelet={deletTask}
        ></TodoCard>
      </Button>
    );
  });

  //remove TASK From Statae:
  function deletTask(ids) {
    console.log(ids);

    
    const newTaskss = Tasks.filter((e) => {
      if (e.id == ids) {
        return false;
      } else return true;
    });
    SetTASKS(newTaskss);
  }

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
            style={{ background: "rgba(10, 10, 10, 0.56)", height: "100% " }}
          >
            <MenuGroup />

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
                <SelectTasks></SelectTasks>
              </div>

              <div className="ContentTasksBody">
                {Tasks.length >= 1 ? TasksResult : <NOData></NOData>}
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
