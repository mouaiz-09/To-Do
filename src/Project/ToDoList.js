
import "../styles/Project.css"
import MenuGroup from "./MenuGroup"
import SelectTasks from "./SelectTasks"
import {lightBlue, lightGreen, blueGrey} from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import TodoCard from "./TodoCard"

export default function ToDoList(params) {
  const themp = createTheme({
    palette:{
      primary:{
        main:lightBlue[800]
      },
      secondary:{
        main:lightBlue[700]
      },
      success:{
        main:lightGreen[400]
      },
      info:{
        main:blueGrey[900]
      }

      
    }
  })

  return (<ThemeProvider  theme={themp}>
    <div className="Todo">
      <div className='ToDocontenet'>

        <div className='menu'  style={{background:(lightBlue[200])}}>
          <MenuGroup/>

        </div>
        <div className="ContentTasks">

          <div className="ContentTasksTop">
            <SelectTasks></SelectTasks>
          </div>
          <div className="ContentTasksBody">
            {/* Tasks her */}
            <TodoCard></TodoCard>
            
          </div>
          <div className="ContentTasksBottum"></div>

        </div>
      </div>

    </div>


  </ThemeProvider>)
}