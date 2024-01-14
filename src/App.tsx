import React, { useEffect, useReducer } from "react";
import bgi from "./assets/image/background.jpeg";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import "./../src/styles/index.css";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <div
      className={
        "w-full overflow-hidden flex flex-col items-center  h-screen border border-black"
      }
    >
      <div className={"flex w-full justify-center items-center h-40 "}>
        <img className={"w-full h-full"} src={bgi} alt="" />
        <div
          className={
            "fixed flex justify-center top-0 left-0 right-0 bottom-60 bg-black/50"
          }
        >
          <span className={"text-3xl mt-4 text-white font-bold"}>Todo App</span>
        </div>
        <div className={"absolute w-1/2 flex justify-around  "}>
          <TodoForm />
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
