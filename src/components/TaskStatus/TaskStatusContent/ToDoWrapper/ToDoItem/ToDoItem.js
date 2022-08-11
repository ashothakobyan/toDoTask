import styles from "./ToDoItem.module.css";
import ToDoFooter from "../ToDoFooter/ToDoFooter";
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setDragItem, setDropItem } from "../../../../../redux/toDoSlicer";
function ToDoItem({ toDoInfo, category, taskStatusIndex, index }) {
  const { priority, title, description, visible, id, status, deadline } =
    toDoInfo;
  const [dragOver, setDragOver] = useState(false);
  const dispatch = useDispatch();
  const toDoStatus = status ? styles.done : "";
  const toDoDeadline =
    !status && new Date().getTime() > new Date(deadline).getTime()
      ? styles.deadline
      : "";
  const dragStart = (e) => {
    e.stopPropagation();
    dispatch(
      setDragItem({
        board: taskStatusIndex,
        item: index,
      })
    );
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const dragLeaveHandler = () => {
    setDragOver(false);
  };
  const dragEndHandler = () => {
    setDragOver(false);
  };
  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    dispatch(
      setDropItem({
        board: taskStatusIndex,
        item: index,
      })
    );
  };
  const dragOverStyle = dragOver ? styles.dragOver : "";
  const wrapperStale = [
    styles.wrapper,
    toDoStatus,
    toDoDeadline,
    dragOverStyle,
  ].join(" ");
  return (
    <div
      onDragStart={(e) => dragStart(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={dragLeaveHandler}
      onDragEnd={dragEndHandler}
      onDrop={(e) => dropHandler(e)}
      draggable={true}
      className={wrapperStale}
    >
      <ToDoHeader
        taskStatusIndex={taskStatusIndex}
        index={index}
        priority={priority}
        title={title}
      />
      {visible ? (
        <h6 className={styles.description}>{description}</h6>
      ) : (
        <div className={styles.unVisibleItem}></div>
      )}
      <ToDoFooter
        visible={visible}
        category={category}
        taskStatusIndex={taskStatusIndex}
        id={id}
        status={status}
        deadline={deadline}
        index={index}
      />
    </div>
  );
}

export default ToDoItem;
