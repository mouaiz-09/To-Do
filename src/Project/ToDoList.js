
import "../styles/Project.css"
import MenuGroup from "./MenuGroup"
import SelectTasks from "./SelectTasks"
export default function ToDoList(params) {
  return (<>
    <div className="Todo">
      <div className='ToDocontenet'>

        <div className='menu'>
          <MenuGroup></MenuGroup>

        </div>
        <div className="ContentTasks">

          <div className="ContentTasksTop">
            <SelectTasks></SelectTasks>
          </div>
          <div className="ContentTasksBody"></div>
          <div className="ContentTasksBottum"></div>

        </div>
      </div>

    </div>


  </>)
}