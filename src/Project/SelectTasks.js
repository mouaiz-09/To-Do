import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { blue, purple } from "@mui/material/colors";

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
        style={{          background: purple[900]          , color: "whitesmoke" }}
      />
    </Stack>
  );
}
