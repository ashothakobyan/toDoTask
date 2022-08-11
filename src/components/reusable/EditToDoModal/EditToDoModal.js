import styles from "./EditToDoModal.module.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import ModalHeader from "../ModalHeader/ModalHeader";
import {
  changeEditToDoModalState,
  editToDoItem,
} from "../../../redux/toDoSlicer";
import { useEffect, useState } from "react";
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import { initialValueState, inputInfo } from "../../../config/modals/addModal";
import ToDoService from "../../../config/services/toDoService";
import statusSelect from "../../../config/modals/editModal";

function EditToDoModal() {
  const { editToDoModalState, editingItem } = useSelector(
    (stat) => stat.toDoSlicer
  );
  const [errorState, setErrorState] = useState({});
  const [currentItem, setCurrentItem] = useState(initialValueState);
  useEffect(() => {
    const boardStatus =
      editingItem.board === 0
        ? "toDo"
        : editingItem.board === 1
        ? "doing"
        : "done";
    setCurrentItem({
      ...editingItem.currentItem,
      boardStatus: boardStatus,
    });
  }, [editingItem]);
  const dispatch = useDispatch();
  const wrapperClassName = [
    editToDoModalState ? styles.open : "",
    styles.wrapper,
  ].join(" ");

  const changeModalState = () => {
    dispatch(changeEditToDoModalState({}));
  };
  const changeFormStateValue = (name, value) => {
    setCurrentItem({
      ...currentItem,
      [name]: value,
    });
  };
  const changeToDo = (e) => {
    e.preventDefault();
    const { title, description, priority, deadline } = currentItem;
    if (
      ToDoService.checkToDoValidation(
        title,
        description,
        priority,
        deadline,
        "edit"
      )
    ) {
      dispatch(editToDoItem(currentItem));
      changeModalState();
      setErrorState({});
    } else {
      const errorObj = ToDoService.createErrorForm(
        title,
        description,
        priority,
        deadline
      );
      setErrorState(errorObj);
    }
  };
  return (
    <div className={wrapperClassName}>
      <ModalHeader title={"Edit Task"} onClick={changeModalState} />
      <form
        onSubmit={(e) => {
          changeToDo(e);
        }}
        className={styles.content}
      >
        {inputInfo.map((el, index) => {
          return el.element === "input" ? (
            <MyInput
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={currentItem[el.name]}
              info={el}
              key={index}
              edit={true}
            />
          ) : (
            <MySelect
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={currentItem[el.name]}
              info={el}
              key={index}
            />
          );
        })}
        <MySelect
          errMessage={errorState[statusSelect.name]}
          changeFormStateValue={changeFormStateValue}
          value={currentItem[statusSelect.name]}
          info={statusSelect}
        />
        <button className={styles.button}>Edit</button>
      </form>
    </div>
  );
}
export default EditToDoModal;
