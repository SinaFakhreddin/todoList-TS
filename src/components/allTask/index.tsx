import React, { memo } from "react";
import { Todos } from "../../types";
import Row from "../row";
import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import NoTasks from "../noTask";

type AllTasksTypes = {
  tabPanelIndex: number;
};
const AllTask = ({ tabPanelIndex }: AllTasksTypes) => {
  const todos = useSelector((state: Todos[]) => state);

  return (
    <>
      <TableBody>
        {todos.length ? (
          todos.map((td: Todos, index: number) => {
            return (
              <Row
                hasPermissionToChangeDoneStatus={tabPanelIndex}
                key={index}
                todo={td}
              />
            );
          })
        ) : (
          <NoTasks title={""} />
        )}
      </TableBody>
    </>
  );
};

export default memo(AllTask, (prev, next) => {
  return prev.tabPanelIndex === next.tabPanelIndex;
});
