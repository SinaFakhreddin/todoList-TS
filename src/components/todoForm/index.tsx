import React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

const TodosList = () => {
  return (
    <>
      <form className="flex border bg-white w-full w-full p-1.5 justify-between rounded-lg flex-row">
        <input
          placeholder={"Add new Todo..."}
          className={
            "w-full text-gray-400 px-4 outline-none placeholder-blue-500"
          }
          type="text"
        />
        <span className={"hover:cursor-pointer"}>
          <AddTaskIcon className={"text-2xl text-blue-400"} />
        </span>
      </form>
    </>
  );
};

export default TodosList;
