import React, { useState, memo, useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import {
  Badge,
  Box,
  Button,
  Chip,
  Collapse,
  IconButton,
  TableCell,
  Tooltip,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TaskIcon from "@mui/icons-material/Task";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Todos } from "../../types";
import { rowColor, todoStatusIcon } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, doneTodoAction } from "../../store/action";
import DoneIcon from "@mui/icons-material/Done";
import TaskIcons from "../taskIcons";

type RowType = {
  key: number;
  todo: Todos;
  hasPermissionToChangeDoneStatus: number;
};

function Row({ todo, key, hasPermissionToChangeDoneStatus }: RowType) {
  const [open, setOpen] = useState<boolean>(false);
  const indexOfTodo = useSelector<Todos[], number>((state) =>
    state.indexOf(todo)
  );
  console.log(
    "state",
    useSelector((state) => state)
  );

  const todoDetail = [todo.startTime, todo.endTime, todo.done];
  const dispatch = useDispatch();

  const doneHandlerTodo = () => {
    if (hasPermissionToChangeDoneStatus !== 0) {
      return;
    } else dispatch(doneTodoAction({ done: true, id: todo.id }));
  };

  const idleHandler = () => {
    if (hasPermissionToChangeDoneStatus !== 0) {
      return;
    } else dispatch(doneTodoAction({ done: "idle", id: todo.id }));
  };

  const unDoneHandler = () => {
    if (hasPermissionToChangeDoneStatus !== 0) {
      return;
    }
    dispatch(doneTodoAction({ done: false, id: todo.id }));
  };

  // const showBadge = {
  //   true: "success",
  //   false: "error",
  //   idle: "warning",
  // };

  // showBadge[todo.done as keyof typeof showBadge]
  console.log("row is rendering");

  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodoAction({ id: id }));
  };
  return (
    <React.Fragment>
      <TableRow
        className={`${rowColor(todo.done)} duration-500 `}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {indexOfTodo + 1}
        </TableCell>
        <TableCell align="center">{todo.id}</TableCell>
        <TableCell align="center">{todo.todoName}</TableCell>
        <TableCell align="center">
          {!hasPermissionToChangeDoneStatus ? (
            <TaskIcons
              idleHandler={idleHandler}
              unDoneHandler={unDoneHandler}
              doneHandler={doneHandlerTodo}
            />
          ) : (
            todoStatusIcon(todoDetail[2])
          )}
        </TableCell>
        <TableCell>
          <Button
            variant={"contained"}
            onClick={() => deleteTodoHandler(todo.id)}
            color={"error"}
            size={"small"}
          >
            Remove
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Todo Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <span className={"font-bold text-gray-800"}>
                        Todo Start Time
                      </span>
                    </TableCell>
                    <TableCell
                      align="center"
                      className={"font-bold text-gray-800"}
                    >
                      <span className={"font-bold text-gray-800"}>
                        {" "}
                        Todo End time
                      </span>
                    </TableCell>
                    <TableCell
                      align="center"
                      className={"font-bold text-gray-800"}
                    >
                      <span className={"font-bold text-gray-800"}>
                        {" "}
                        Todo Status
                      </span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {todoDetail.map((td) => {
                      return (
                        <TableCell align="center">
                          {todoStatusIcon(td)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default memo(Row);
