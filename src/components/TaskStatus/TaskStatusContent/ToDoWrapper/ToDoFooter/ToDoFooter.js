import { useDispatch } from "react-redux/es/hooks/useDispatch";
import styles from "./ToDoFooter.module.css";
import show from "../../../../../assets/show.png";
import hide from "../../../../../assets/hide.png";
import done from "../../../../../assets/done.png";
import inProgress from "../../../../../assets/inProgress.png";
import {
  changeToDoItemState,
  changeVisible,
} from "../../../../../redux/toDoSlicer";

function ToDoFooter({
  visible,
  category,
  id,
  status,
  deadline,
  taskStatusIndex,
  index,
}) {
  const dispatch = useDispatch();
  const changeVisibleHandler = () => {
    dispatch(changeVisible({ taskStatusIndex, index }));
  };
  const changeStatusHandler = () => {
    dispatch(changeToDoItemState({ taskStatusIndex, index }));
  };
  return (
    <div className={styles.wrapper}>
      <img
        onClick={changeVisibleHandler}
        className={styles.visible}
        src={visible ? show : hide}
        alt="/"
        draggable={false}
      />
      <img
        onClick={changeStatusHandler}
        src={status ? done : inProgress}
        className={styles.status}
        alt="/"
        draggable={false}
      />
      {status
        ? ""
        : new Date().getTime() < deadline
        ? new Date(deadline).toLocaleString()
        : `End 
         ${new Date(deadline).toLocaleString()}`}
    </div>
  );
}

export default ToDoFooter;
