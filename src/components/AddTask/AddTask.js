import { changeAddToDoModalState } from "../../redux/toDoSlicer";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import styles from "./AddTask.module.css";

function AddTask() {
  const dispatch = useDispatch();

  const changeStateHandler = () => {
    dispatch(changeAddToDoModalState());
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={changeStateHandler} className={styles.button}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
