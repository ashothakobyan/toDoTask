import styles from "./Content.module.css";
import { useSelector } from "react-redux/es/exports";
import TaskStatus from "../TaskStatus/TaskStatusWrapper/TaskStatusWrapper";
function Content() {
  const tasksStatuses = useSelector((stat) => stat.toDoSlicer.tasksStatuses);
  return (
    <div className={styles.wrapper}>
      {tasksStatuses.map((taskStatus, index) => (
        <TaskStatus
          key={index}
          taskStatusInfo={taskStatus}
          taskStatusIndex={index}
        />
      ))}
    </div>
  );
}

export default Content;
