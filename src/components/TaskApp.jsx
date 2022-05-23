import React from "react";
import TaksHeader from "./TaskHeader/TaskHeader";
import { useState } from "react";

import AddTask from "./AddTask/AddTask.jsx";

import Tasks from "./Tasks/Tasks";

import styles from "./taskApp.module.css";


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [ todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {

    setTodos([...todos, newTodo]);
  }
  const deletTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value))
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaksHeader todo={todos} />
      {/* Add Task */}
      <AddTask addTodo={addTodo} />
      {/* Tasks */}
      <Tasks todos={todos} deletTodo={deletTodo}/>
    </div>
  );
};

export default TaskApp;
