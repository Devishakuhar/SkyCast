import React from 'react'
import { useState } from 'react';
import './Todo.css';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [todoss, setTodoss] = useState([{todos: "sample-task", id: uuidv4()}]);
    let [newTask, setNewTask] = useState("");

    let addNewTask = () =>{
        setTodoss((prevTodos)=>{
           return [...prevTodos, { todos: newTask, id: uuidv4() }]
        });
        setNewTask("");
     };
    let updateTodoValue = (event) =>{
        setNewTask(event.target.value);
    };
    let deleteTodo =(id) =>{
       setTodoss(todoss.filter((task) => task.id != id));
    };
    let upperCaseAll = () =>{
        setTodoss(
            todoss.map((task)=> {
                return {
                    ...task,
                    todos: task.todos.toUpperCase(), 
                };
            })
        );
    };

  return (
    <div className='todos'><h5>Todo List</h5>
    <input placeholder ="enter your task" type="text"  value = {newTask} onChange = {updateTodoValue}/>
    <button onClick={addNewTask}>Add</button>
    <br></br><br></br>
    <h4>Here is your task to perform </h4>
    <ul>
      {todoss.map((task) =>(
        <li key ={task.id}>
            <span>{task.todos}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(task.id)}>delete</button>
            </li>
      ))}
    </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
    
    </div>
  )
}

export default Todo