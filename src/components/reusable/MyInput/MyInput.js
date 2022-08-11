import Error from "../Error/Error";
import styles from "./MyInput.module.css";

function MyInput({ info, value, changeFormStateValue, errMessage, edit }) {
  const { type, placeholder, name } = info;
  const onChangeHandler = (value) => {
    changeFormStateValue(name, value);
  };
  function dateIsValid(date) {
    return !Number.isNaN(new Date(date).getTime());
  }

  return (
    <div className={styles.wrapper}>
      {errMessage ? <Error message={errMessage} /> : ""}
      <input
        value={
          type === "datetime-local" && dateIsValid(value)
            ? new Date(value).toISOString().split(":")[0] + ":00"
            : value
        }
        min={
          !edit && type === "datetime-local" && (!value || dateIsValid(value))
            ? new Date().toISOString().split(":")[0] + ":00"
            : ""
        }
        className={`${styles.input} ${errMessage ? styles.error : ""}`}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}

export default MyInput;
