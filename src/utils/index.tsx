import TaskIcon from "@mui/icons-material/Task";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import React from "react";
import { Todos } from "../types";

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const todoStatusIcon = (todoDetail: string | boolean | null) => {
  switch (todoDetail) {
    case true:
      return <TaskIcon className={"text-green-700 hover:cursor-pointer"} />;

    case false:
      return (
        <WarningOutlinedIcon className={"text-red-700 hover:cursor-pointer"} />
      );

    case "idle":
      return (
        <WorkHistoryOutlinedIcon
          className={"text-amber-400 hover:cursor-pointer"}
        />
      );
    default:
      return todoDetail;
  }
};

export const rowColor = (done: string | boolean) => {
  switch (done) {
    case true:
      return "bg-green-200";
    case false:
      return "bg-red-200";
    case "idle":
      return "bg-amber-200";

    default:
      return "bg-gray-400";
  }
};

export const showBadge = (done: boolean | string) => {
  switch (done) {
    case true:
      return;
  }
};
