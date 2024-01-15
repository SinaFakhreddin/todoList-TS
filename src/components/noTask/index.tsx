import React, { memo } from "react";
import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";

type NoIdleTaskProps = {
  title: string;
};

const NoTasks = ({ title }: NoIdleTaskProps) => {
  return (
    <>
      <TableRow
        // className={`${rowColor(todo.done)} duration-500 `}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell colSpan={5} align="center" component="th" scope="row">
          <span className={"text-xl font-bold text-gray-700"}>
            no {title} task
          </span>
        </TableCell>
      </TableRow>
    </>
  );
};

export default memo(NoTasks);
