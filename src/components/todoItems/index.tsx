import React from "react";
import TaskIcon from "@mui/icons-material/Task";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

type TodoItemsType = {
  id: string | null;
  todo: string | null;
  end: string | null;
  start: string | null;
  done: boolean | null;
  index: number;
};

const TodoItems = ({  todo, end, start, done, index }: TodoItemsType) => {
  return (
    <div
      className={
        "flex w-full  justify-between items-center shadow-xl my-4 rounded-lg p-2"
      }
    >
      <div>
        <span>{index}-</span>
        <span>{todo}</span>
      </div>
      <div>{start}</div>
      <div>{end}</div>
      <div>{`${done}`}</div>
      <div className={"flex justify-between"}>
        <TaskIcon className={"text-green-700 hover:cursor-pointer"} />
        <WarningOutlinedIcon className={"text-red-700 hover:cursor-pointer"} />
        <WorkHistoryOutlinedIcon
          className={"text-amber-400 hover:cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default TodoItems;
