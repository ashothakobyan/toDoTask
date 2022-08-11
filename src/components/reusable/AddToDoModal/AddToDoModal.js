import styles from "./AddToDoModal.module.css";
import { useSelector } from "react-redux/es/exports";
import { inputInfo, initialValueState } from "../../../config/modals/addModal";
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import { useState } from "react";
import { addToDo, changeAddToDoModalState } from "../../../redux/toDoSlicer";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import ModalHeader from "../ModalHeader/ModalHeader";
import ToDoService from "../../../config/services/toDoService";

function AddToDoModal({ modalSTate }) {
  const modalState = useSelector((stat) => stat.toDoSlicer.addToDoModalState);
  const [formState, setFormState] = useState(initialValueState);
  const [errorState, setErrorState] = useState({});
  const dispatch = useDispatch();
  const state = modalState ? styles.open : "";
  const changeFormStateValue = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const changeModalState = () => {
    dispatch(changeAddToDoModalState());
  };
  const addToDO = (e) => {
    e.preventDefault();
    const { title, description, priority, deadline } = formState;
    if (
      ToDoService.checkToDoValidation(title, description, priority, deadline)
    ) {
      dispatch(addToDo(formState));
      changeModalState();
      setErrorState({});
      setFormState(initialValueState);
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
    <div className={[styles.wrapper, state].join(" ")}>
      <ModalHeader title={"Add Task"} onClick={changeModalState} />
      <form
        onSubmit={(e) => {
          addToDO(e);
        }}
        className={styles.content}
      >
        {inputInfo.map((el, index) => {
          return el.element === "input" ? (
            <MyInput
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={formState[el.name]}
              info={el}
              key={index}
            />
          ) : (
            <MySelect
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={formState[el.name]}
              info={el}
              key={index}
            />
          );
        })}

        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}

export default AddToDoModal;
