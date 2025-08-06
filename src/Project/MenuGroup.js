import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

export default function MenuGroup({ functionEditeFilter, filter }) {
  function edet(value) {
    console.log(value);

    functionEditeFilter(value);
  }

  const buttons = [
    <Button
      onClick={() => {
        edet("ALL");
      }}
      style={{
        borderRadius: "0px  10px 0px 0px",
        padding: "10px",
        background: filter == "ALL" ? blue[600] : "",
      }}
      key="one"
    >
      كل المهام
    </Button>,

    <Button
      onClick={() => {
        edet("Not Completed");
      }}
      style={{
        borderRadius: "0px  0px 0px 0px",
        padding: "10px",
        background: filter == "Not Completed" ? "red" : "",
      }}
      key="three"
    >
      الغير منجزة
    </Button>,
    <Button
      onClick={() => {
        edet("Cpmleted");
      }}
      style={{
        borderRadius: "0px  0px 0px 0px",
        padding: "10px",
        background: filter == "Cpmleted" ? "green" : "",
      }}
      key="two"
    >
      المنجزة
    </Button>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          marginTop: 0,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
        style={{ width: "100%" }}
        color="primary"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
