import styles from "./TaskStatusHeader.module.css";
import show from "../../../assets/show.png";
import hide from "../../../assets/hide.png";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeTaskStatusState } from "../../../redux/toDoSlicer";
function TaskStatusHeader({ title, showIcon, taskStatusIndex }) {
  const dispatch = useDispatch();
  const changeStatusHandler = () => {
    dispatch(changeTaskStatusState({ taskStatusIndex }));
  };
  return (
    <div draggable={false} className={styles.wrapper}>
      <h6 className={styles.text}>{title}</h6>
      <img
        onClick={changeStatusHandler}
        className={styles.icon}
        src={showIcon ? show : hide}
        alt="/"
      />
    </div>
  );
}

export default TaskStatusHeader;
