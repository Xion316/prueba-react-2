import React from "react";
import { useState } from "react";
import { Task } from '../../../utils/interfaces/task';
const useTodo = ()=>{
const [taskList, setTaskList] = useState<Task[]>([]); 
const [completedTaskList, setCompletedTaskList]=useState<Task[]>([]);
const addTask = (title:string)=>{
    const newTask: Task ={
        id: Math.floor(Math.random()*200),
        title: title
    };    
setTaskList([...taskList,newTask]);    
};
 


const deleteTask=(id:number)=>{};
const completeTask=(id:number)=>{};
return{
    taskList,
    completedTaskList,
    addTask,
    deleteTask,
    completeTask,
}
};
export default useTodo;