import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function SelectTasks({ state }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={state}
        onClick={handleClick}
        onDelete={handleDelete}
        style={{ background: "rgba(28, 28, 29, 0.71)" , color:"whitesmoke"}}
      
      />
    </Stack>
  );
}
