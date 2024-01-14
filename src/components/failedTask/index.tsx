import React, { memo } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, TableCell } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { Todos } from "../../types";
import Row from "../row";
import { useSelector } from "react-redux";
import NoTasks from "../noTask";

type FailedTasksProps = {
  tabPanelIndex: number;
};
const Failedtasks = ({ tabPanelIndex }: FailedTasksProps) => {
  const failedTasks = useSelector<Todos[], Todos[]>((state) =>
    state
      .filter((todo) => todo.done !== true)
      .filter((todo) => todo.done !== "idle")
  );

  console.log("failedtasks is rendering");

  return (
    <div className={"w-full p-2 mt-2"}>
      <div className={"w-full mb-4"}>
        <span className={"text-3xl font-bold text-gray-600"}>Failed Tasks</span>
      </div>
      <TableContainer className={"bg-gray-100 rounded-lg"}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <span className={"font-bold text-gray-800"}>todo detail</span>
              </TableCell>
              <TableCell align="center">
                {" "}
                <span className={"font-bold text-gray-800"}>number</span>
              </TableCell>
              <TableCell align="center">
                {" "}
                <span className={"font-bold text-gray-800"}>todo id</span>
              </TableCell>
              <TableCell align="center">
                {" "}
                <span className={"font-bold text-gray-800"}>todo name</span>
              </TableCell>
              <TableCell align="center">
                {" "}
                <span className={"font-bold text-gray-800"}>todoStatus</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {failedTasks.length ? (
              failedTasks.map((td: Todos, index: number) => {
                return (
                  <Row
                    hasPermissionToChangeDoneStatus={tabPanelIndex}
                    key={index}
                    todo={td}
                  />
                );
              })
            ) : (
              <NoTasks title={"failed"} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default memo(Failedtasks, (prev, next) => {
  return prev.tabPanelIndex === next.tabPanelIndex;
});
