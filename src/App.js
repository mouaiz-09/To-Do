import "./App.css";
import "./index.css";
import ToDoList from "./Project/ToDoList";
import {  lightBlue } from "@mui/material/colors";

export default function CircularIndeterminate() {
  return (
    <>
      <div
        style={{
          color: "whitesmoke",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "20px",
          background: "rgb(10,20,30)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              background: lightBlue[700],
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            {" "}
          مهامي
          </h1>
        </div>

        <ToDoList></ToDoList>
      </div>
    </>
  );
}

// project done wiiii zin