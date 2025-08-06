import "../styles/Project.css";
import MenuGroup from "./MenuGroup";
import SelectTasks from "./SelectTasks";
import { lightBlue, lightGreen, purple, red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import NOData from "./NoData";
import ALLTASKS from "./ALLTasks";
import Complted from "./Completed";
import NotCompleted from "./NotCompleted";
// icosn
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export default function ToDoList(params) {
  // State & function For Open Close Dea Page:
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickclose = () => {
    setOpen(false);
  };
  // State & function For  Tasks:
  const [Tasks, SetTASKS] = useState([
    
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
    const data = [
      ...Tasks,
      {
        Titel: Value.Titel,
        des: Value.des,
        state: false,
        id: Date.now(),
      },
    ];
    localStorage.setItem("todos", JSON.stringify(data));
  }

  //state for filter:
  const [filter, setfliter] = useState("ALL"); // ALL, Cpmleted , Not Completed
  function Result() {
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

  useEffect(()=>{
    if (localStorage.todos) {
      const data = JSON.parse(localStorage.getItem("todos"));
      console.log(data);
      if (data.length >=0) {
       
        SetTASKS(data)
      }
    }
   
   
  }, [])

  return (
    <ThemeProvider theme={themp}>
      <div className="Todo" onMouseMove={() => {}}>
        <div className="ToDocontenet">
          <div className="menu">
            <MenuGroup functionEditeFilter={EditeFilter} filter={filter} />
            {/*sh medai */}
            <div
              style={{
                background: "rgb(0, 41, 51)",
                padding: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <a
                href="http://instgram.com/abde_elmouaiz_10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </div>
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
                <SelectTasks setstate={setfliter} state={filter}></SelectTasks>
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
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                    flexDirection: "row",
                    fontFamily: "cursive",
                    gap: "2px",
                  }}
                >
                  <AddCircleOutlineIcon />
                  اضافة مهمة جديدة
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
