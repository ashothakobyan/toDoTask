import styles from "./ModalHeader.module.css";
import closeIcon from "../../../assets/close.png";
function ModalHeader({ title, onClick }) {
  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>{title}</h6>
      <img
        onClick={() => onClick()}
        className={styles.icon}
        src={closeIcon}
        alt="/"
      />
    </div>
  );
}

export default ModalHeader;
