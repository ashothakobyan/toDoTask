import Error from "../Error/Error";
import styles from "./MySelect.module.css";
function MySelect({ info, value, changeFormStateValue, errMessage }) {
  const { childe, name } = info;
  const onChangeHandler = (value) => {
    changeFormStateValue(name, value);
  };
  return (
    <div className={styles.wrapper}>
      {errMessage ? <Error message={errMessage} /> : ""}

      <select
        onChange={(e) => onChangeHandler(e.target.value)}
        value={value}
        className={`${styles.select} ${errMessage ? styles.error : ""}`}
        defaultValue={"default"}
      >
        {childe.map((el, index) => {
          return (
            <option
              className={styles.option}
              key={index}
              value={el.value}
              disabled={el.disabled}
            >
              {el.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default MySelect;
