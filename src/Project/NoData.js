import ReportProblemSharpIcon from "@mui/icons-material/ReportProblemSharp";
export default function NOData() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "200px",
        maxHeight: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
        gap: "2px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexDirection: "row-reverse",
          display: "flex",
          gap: "2px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h1>No Tasks</h1>
        <ReportProblemSharpIcon
          style={{
            color: "red",
            fontSize: "55px",
          }}
        />
      </div>
      <p style={{color:"whitesmoke"}}>
        you can add one in Button buttom
      </p>
    </div>
  );
}
