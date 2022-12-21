import { FC } from "react";
import { Task } from "../../../utils/interfaces/task";
import "./tasks-list.scss";
import Card from "../../molecules/card/card";

interface TasksListProps {
  tasks: Task[];
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {
  if (tasks.length === 0)
    return <h2 className="tasks-list__title">la lista esta vacia</h2>;
  return (
    <div className="tasks-list">
      {tasks?.map((task, index) => (
        <Card key={`task-${index}`} title={task.title} />
      ))}
    </div>
  );
};

export default TasksList;
