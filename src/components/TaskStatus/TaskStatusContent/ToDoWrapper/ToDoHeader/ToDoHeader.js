import Priority from "../Priority/Priority";
import styles from "./ToDoHeader.module.css";
import edit from "../../../../../assets/edit.png";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeEditToDoModalState } from "../../../../../redux/toDoSlicer";
function ToDoHeader({ priority, title, taskStatusIndex, index }) {
  const dispatch = useDispatch();
  const changeModalState = () => {
    dispatch(
      changeEditToDoModalState({
        taskStatusIndex: taskStatusIndex,
        index: index,
      })
    );
  };
  return (
    <div draggable={false} className={styles.wrapper}>
      <div className={styles.header}>
        <Priority state={priority} />
        <img
          className={styles.icon}
          src={edit}
          draggable={false}
          onClick={changeModalState}
          alt="/"
        />
      </div>
      <h6 className={styles.title}>{title}</h6>
    </div>
  );
}

export default ToDoHeader;
