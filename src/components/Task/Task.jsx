import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import data from "../../data/tasks.json";

const Task = ({todos, deletTodo,value}) => {
  // NOTE: do not delete `data-cy` key value pair
 
  return (
    <>
    { data.map((u) => {
      return (
    
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
      
            {u.text}
        
      </div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button">x</button>
      
    </li>
    )
  })}


{ todos.map((l) => {
      return (
    
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
      
            {l}
        
      </div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button" onClick={()=>deletTodo(value)}>x</button>
      
    </li>
    )
  })}
  </>
  );
};

export default Task;
