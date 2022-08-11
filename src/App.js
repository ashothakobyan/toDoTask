import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import AddToDoModal from "./components/reusable/AddToDoModal/AddToDoModal";
import { useSelector } from "react-redux/es/exports";
import EditToDoModal from "./components/reusable/EditToDoModal/EditToDoModal";

function App() {
  const { editToDoModalState, addToDoModalState } = useSelector(
    (stat) => stat.toDoSlicer
  );

  return (
    <>
      <div
        className={` App ${
          editToDoModalState || addToDoModalState ? "modalOpen" : ""
        }`}
      >
        <Header />
        <AddTask />
        <Content />
      </div>
      {addToDoModalState && <AddToDoModal />}
      {editToDoModalState && <EditToDoModal />}
    </>
  );
}

export default App;
