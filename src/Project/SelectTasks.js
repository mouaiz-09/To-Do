import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

export default function SelectTasks({ state, setstate }) {
  const [va, sett] = useState(["dzdz", ""]);
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    setstate("ALL");
  };

  useEffect(() => {
    if (state === "ALL") {
      sett(["الكل", ""]);
    } else if (state === "Cpmleted") {
      sett(["المنجزة", "green"]);
    } else {
      sett(["الغير منجزة", "red"]);
    }
  }, [state]);
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          label={va[0]}
          onClick={handleClick}
          onDelete={handleDelete}
          style={{
            background: va[1] || purple[900],
            color: "whitesmoke",
            width: "auto",
            padding: "5px 10px",
          }}
        />
      </Stack>
    </>
  );
}
