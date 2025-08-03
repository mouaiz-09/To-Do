import TodoCard from "./TodoCard";
import Button from "@mui/material/Button";

export default function ALLTASKS({ Datat,SetDATA }) {
  const TasksResult = Datat.map((task) => {
    return (
      <Button fullWidth>
        <TodoCard
          key={task.id}
          Titel={task.Titel}
          des={task.des}
          statue={task.state}
          IdTask={task.id}
          functiondelet={deletTask}
          functionedetstate={edetstate}
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
  }

  return <>
  {TasksResult}
  </>;
}
