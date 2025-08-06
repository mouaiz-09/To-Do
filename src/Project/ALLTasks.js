import TodoCard from "./TodoCard";
import Button from "@mui/material/Button";

export default function ALLTASKS({ Datat, SetDATA }) {
  //all tasks show
  const TasksResult = Datat.map((task) => {
    return (
      <Button key={task.id} fullWidth>
        <TodoCard
          Titel={task.Titel}
          des={task.des}
          statue={task.state}
          IdTask={task.id}
          functiondelet={deletTask}
          functionedetstate={edetstate}
          EdetTaskState={EdeteTask}
        ></TodoCard>
      </Button>
    );
  });
  //remove TASK From Statae:
  function deletTask(ids) {
    console.log(ids);

    const newTaskss = Datat.filter((e) => {
      if (e.id == ids) {
        return false;
      } else return true;
    });

    SetDATA(newTaskss);
    localStorage.todos = JSON.stringify(newTaskss); 
    
 

  }

  //edit satate
  function edetstate(ids) {
    const newTaskss = Datat.map((task) => {
      if (task.id === ids) {
        if (task.state) {
          return { ...task, state: false };
        } else {
          return { ...task, state: true };
        }
      } else return { ...task };
    });

    SetDATA(newTaskss);

    localStorage.todos = JSON.stringify(newTaskss) 
  }

  //edet task

  function EdeteTask(ids, value) {
    const Titeltask = value.Titel;
    const destask = value.des;

    const newTaskss = Datat.map((task) => {
      if (task.id === ids) {
        return { ...task, Titel: Titeltask, des: destask, id: ids };
      } else return { ...task };

    });

    SetDATA(newTaskss);
    localStorage.todos = JSON.stringify(newTaskss); 
  }

  return <>{TasksResult}</>;
}
