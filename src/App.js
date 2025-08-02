import "./App.css";
import "./index.css"
import ToDoList from "./Project/ToDoList";

export default function CircularIndeterminate() {
  return (
    <>
      <div style={{
        background: "rgb(4, 53, 42)",
        color: "whitesmoke",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "20px"

      }}   >
        <div style={{ width: "100%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center" }} >
          <h1 style={{
            fontSize: "25px",
            background: "rgb(20,20,30)",
            borderRadius: "15px",
            padding: "10px",

          }}>  To Do Liste</h1>
        </div>

      
     
          <ToDoList></ToDoList>


      




      </div >
    </>
  );
}
