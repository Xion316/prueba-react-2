import React, { createContext,FC, useContext } from 'react'
import { Task } from '../../utils/interfaces/task';
import useTodo from './use-todo/use-todo';
 
export interface TodoStateContext{
taskList:Task[];
completedTaskList:Task[];
addTask: (title:string)=>void;
completeTask: (id:number)=>void;
deleteTask: (id:number)=>void;
}
 export interface TodoProviderProps{
    children: React.ReactNode
 }

 export const TodoContext = createContext<TodoStateContext>(
 {} as unknown as TodoStateContext   
 );

 export const useTodoContext =()=> useContext(TodoContext);

 export const TodoProvider: FC<TodoProviderProps> =({children})=>{
    const values = useTodo();
    return<TodoContext.Provider value={values}>{children}</TodoContext.Provider>
 };