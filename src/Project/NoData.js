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
        <ReportProblemSharpIcon
          style={{
            color: "rgb(217, 255, 0)",
            fontSize: "55px",
          }}
        />
      </div>
      <h2
        style={{
          color: "rgb(217, 255, 0)",
          
        }}
      >
        لاتوجد مهام 
      </h2>
      <p style={{ color: "whitesmoke" }}>يمكنك ان تضيف مهمة من الزر ادناه</p>
    </div>
  );
}
