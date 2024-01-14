import React, { memo } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { Todos } from "../../types";
import Row from "../row";
import { useSelector } from "react-redux";
import NoTasks from "../noTask";

type DoneTasksProps = {
  tabPanelIndex: number;
};

const DoneTasks = ({ tabPanelIndex }: DoneTasksProps) => {
  const todosDone = useSelector<Todos[], Todos[]>((state) =>
    state
      .filter((item) => item.done !== "idle")
      .filter((item) => item.done !== false)
  );

  console.log("done tasks is rendering");

  return (
    <div className={"w-full p-2 mt-2"}>
      <div className={"w-full mb-4"}>
        <span className={"text-3xl font-bold text-gray-600"}>Done Tasks</span>
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
            {todosDone.length ? (
              todosDone.map((td: Todos, index: number) => {
                return (
                  <Row
                    hasPermissionToChangeDoneStatus={tabPanelIndex}
                    key={index}
                    todo={td}
                  />
                );
              })
            ) : (
              <NoTasks title={"done"} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default memo(DoneTasks, (prev, next) => {
  return prev.tabPanelIndex === next.tabPanelIndex;
});
