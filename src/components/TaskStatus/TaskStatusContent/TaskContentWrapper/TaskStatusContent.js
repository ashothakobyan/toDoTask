import ToDoItem from "../ToDoWrapper/ToDoItem/ToDoItem";
import styles from "./TaskStatusContent.module.css";
function TaskStatusContent({ items, category, taskStatusIndex }) {
  return (
    <div draggable={false} className={styles.wrapper}>
      {items.map((toDo, index) => (
        <ToDoItem
          key={toDo.id}
          toDoInfo={toDo}
          category={category}
          taskStatusIndex={taskStatusIndex}
          index={index}
        />
      ))}
    </div>
  );
}

export default TaskStatusContent;
