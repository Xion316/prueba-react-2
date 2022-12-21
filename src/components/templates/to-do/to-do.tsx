import Button from "../../atoms/button/button";
import Counter from "../../atoms/counter/counter";
import Input from "../../atoms/input/input";
import TasksList from "../../organisms/tasks-list/tasks-list";
import "./to-do.scss";
import { useTodoContext } from '../../../context/todo-context/todo-context';
import useAddTask from './use-add-task/use-add-task';


const ToDo = () => {
  const { taskList, completedTaskList,addTask } = useTodoContext();
  const {title,handleChangeTitle, setTitle}= useAddTask();
  return (
    <div className="to-do">
      <h1 className="to-do__title">TODO LIST</h1>
      <div className="to-do__header">
        <Input

          value={title}
          name="addTask"
          onChange={handleChangeTitle}
          placeholder="Título" 
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>)=>{ if (event.key === 'Enter') addTask(title), setTitle("") }}                 />
        <Button onClick={() => {addTask(title), setTitle("")}}>Agregar</Button>
      </div>

      <TasksList tasks={taskList} />
      <div className="to-do__counter">
        <Counter completedTasks={completedTaskList.length} totalTasks={taskList.length} />
      </div>
    </div>
  );
};

export default ToDo;
