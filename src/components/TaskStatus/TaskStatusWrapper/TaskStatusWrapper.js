import TaskStatusContent from "../TaskStatusContent/TaskContentWrapper/TaskStatusContent";
import TaskStatusHeader from "../TaskStatusHeader/TaskStatusHeader";
import styles from "./TaskStatusWrapper.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setDropItem } from "../../../redux/toDoSlicer";
function TaskStatus({ taskStatusInfo, taskStatusIndex }) {
  const { name, items, show } = taskStatusInfo;
  const dispatch = useDispatch();
  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setDropItem({ column: taskStatusIndex }));
  };
  return (
    <div
      draggable={false}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => dropHandler(e)}
      className={styles.wrapper}
    >
      <TaskStatusHeader
        title={name}
        showIcon={show}
        taskStatusIndex={taskStatusIndex}
      />
      {show ? (
        <TaskStatusContent
          items={items}
          category={name}
          taskStatusIndex={taskStatusIndex}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskStatus;
