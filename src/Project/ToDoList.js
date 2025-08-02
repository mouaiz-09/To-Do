
import "../styles/Project.css"
import MenuGroup from "./MenuGroup"
import SelectTasks from "./SelectTasks"
import {green, grey, lightBlue, lightGreen, purple, red, } from "@mui/material/colors"
import { createTheme,  ThemeProvider } from "@mui/material/styles"
import TodoCard from "./TodoCard"
import Button from '@mui/material/Button';
import { useState } from "react"
import AddNewTask from "./AddNewTask"



export default function ToDoList(params) {

  // State & function For Open Close Dea Page:
  const [open,setOpen] = useState(false)
   const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickclose = () => {
    
    setOpen(false);

  };
    // State & function For ADd Tasks:
    const [Tasks, SetTASKS] = useState([{
        Titel:"Value.Titel",
      des: "zizoe",
      state:true
    },
    {
        Titel:"Value.Titel",
      des: "zizoe",
      state:true
    },
    {
        Titel:"Value.Titel",
      des: "zizoe",
      state:true
    }
    ,{
        Titel:"Value.Titel",
      des: "zizoe",
      state:true
    }
    ,{
        Titel:"Value.Titel",
      des: "zizoe",
      state:true
    }
    ])

  function AddTask(Value) {

    SetTASKS([...Tasks, {
      Titel:Value.Titel,
      des: Value.des,
      state:false
    }] )
  }

  const TasksResult = Tasks.map((task)=>{
    return (
             <Button  fullWidth>
             <TodoCard  Titel={task.Titel} des={task.des}  statue={task.state}></TodoCard>
            </Button>
    )

  })  


  const themp = createTheme({
    palette:{
      primary:{
        main:purple[900]
      },
      secondary:{
         main:lightBlue[900]
      },
      success:{
        main:lightGreen[400]
      },
      info:{
        main:"rgb(255, 255, 255)"
      },
      warning:{
        main:red[700]
      }

      
    }
  })

  return (<ThemeProvider  theme={themp}>
    <div className="Todo">
      <div className='ToDocontenet'>

        <div className='menu'  style={{background:(purple[800]), height:"100% "} }>
          <MenuGroup/>

          <Button color="secondary" 
           style={{borderRadius:"0px 0px 0px 7px"}}  
           variant="contained">
            Contained
           </Button>

        </div>
        <div className="ContentTasks">
  <div className="c">

          <div className="ContentTasksTop"  style={{
            position:"sticky",
            top:"5px",
            right:"5px"
            ,zIndex:"2"
          }}>
            <SelectTasks  ></SelectTasks>
          </div>

          <div className="ContentTasksBody">
            {/* Tasks her */}
            {TasksResult}
            
          </div>
  </div>

         <div className="ContentTasksBottum">
          <div  >
            <Button variant="contained" color="secondary" fullWidth    onClick={handleClickOpen}> add new task</Button>
          </div>
         </div>

        </div>

      </div>

    </div>

<AddNewTask openstatue={open}  FunctionhandleClose ={handleClickclose}  FunctionAddTask={AddTask} ></AddNewTask>

  </ThemeProvider>)
}