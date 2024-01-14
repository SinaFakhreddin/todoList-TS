import React from "react";
import { Tooltip } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

type TaskIconsProps = {
  doneHandler: () => void;
  unDoneHandler: () => void;
  idleHandler: () => void;
};

const TaskIcons = ({
  idleHandler,
  unDoneHandler,
  doneHandler,
}: TaskIconsProps) => {
  return (
    <div>
      <Tooltip title={"done"}>
        <TaskIcon
          onClick={doneHandler}
          className={`text-green-700 hover:cursor-pointer`}
        />
      </Tooltip>

      <Tooltip title={"undone"}>
        <WarningOutlinedIcon
          onClick={unDoneHandler}
          className={` text-red-700 hover:cursor-pointer`}
        />
      </Tooltip>

      <Tooltip title={"idle"}>
        <WorkHistoryOutlinedIcon
          onClick={idleHandler}
          className={`text-amber-600 hover:cursor-pointer`}
        />
      </Tooltip>
    </div>
  );
};

export default TaskIcons;
