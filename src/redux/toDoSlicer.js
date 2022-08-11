import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import ToDoService from "../config/services/toDoService";
import dragDropService from "../config/services/dragDropService";
export const toDoSlicer = createSlice({
  name: "toDoSlicer",
  initialState,
  reducers: {
    changeVisible: (state, action) => {
      const { taskStatusIndex, index } = action.payload;
      const currentCategory = ToDoService.changeItemVisibility(
        { ...state.tasksStatuses[taskStatusIndex] },
        index
      );
      state.tasksStatuses[taskStatusIndex] = currentCategory;
    },
    changeToDoItemState: (state, action) => {
      const { taskStatusIndex, index } = action.payload;
      const { moveCategoryIndex, currentCategory, categoryForMove } =
        ToDoService.changeItemState(
          state.tasksStatuses,
          taskStatusIndex,
          index
        );

      state.tasksStatuses[taskStatusIndex].items = currentCategory;
      state.tasksStatuses[moveCategoryIndex].items = categoryForMove;
    },
    changeTaskStatusState: (state, action) => {
      const { taskStatusIndex } = action.payload;
      const currentCategory = { ...state.tasksStatuses[taskStatusIndex] };
      currentCategory.show = !currentCategory.show;
      state.tasksStatuses[taskStatusIndex] = currentCategory;
    },
    changeAddToDoModalState: (state) => {
      state.addToDoModalState = !state.addToDoModalState;
    },
    changeEditToDoModalState: (state, action) => {
      const { taskStatusIndex, index } = action.payload;
      if (!state.editToDoModalState) {
        const currentItem = {
          ...state.tasksStatuses[taskStatusIndex].items[index],
        };

        state.editingItem = {
          board: taskStatusIndex,
          item: index,
          currentItem: currentItem,
        };
      }
      state.editToDoModalState = !state.editToDoModalState;
    },
    addToDo: (state, action) => {
      const { title, description, priority, deadline } = action.payload;

      const newToDo = ToDoService.createItem(
        title,
        description,
        priority,
        deadline
      );
      const cloneToDoState = [...state.tasksStatuses[0].items];
      cloneToDoState.push(newToDo);
      state.tasksStatuses[0].items = cloneToDoState;
    },

    setDragItem: (state, action) => {
      const { board, item } = action.payload;
      state.dragItem = { board, item };
    },
    setDropItem: (state, action) => {
      const { board, item, column } = action.payload;
      const currentDragBoard = [
        ...state.tasksStatuses[state.dragItem.board].items,
      ];
      if (column === undefined && board !== state.dragItem.board) {
        const { currentBoard, currentDropBoard } =
          dragDropService.changeItemPlace(
            currentDragBoard,
            state.tasksStatuses,
            state.dragItem,
            board,
            item
          );
        state.tasksStatuses[state.dragItem.board].items = currentBoard;
        state.tasksStatuses[board].items = currentDropBoard;
        state.dragItem = {
          item: "",
          board: "",
        };
      } else if (column === undefined) {
        const dropElement = currentDragBoard[item];
        currentDragBoard[item] = currentDragBoard[state.dragItem.item];
        currentDragBoard[state.dragItem.item] = dropElement;
        state.tasksStatuses[board].items = currentDragBoard;
      } else if (column !== undefined && column !== state.dragItem.board) {
        const { currentDropBoard, currentBoard } =
          dragDropService.changeItemBoard(
            state.tasksStatuses,
            state.dragItem,
            currentDragBoard,
            column
          );
        state.tasksStatuses[state.dragItem.board].items = currentBoard;
        state.tasksStatuses[column].items = currentDropBoard;
      }
    },
    editToDoItem: (state, action) => {
      const editingItem = action.payload;
      const { board, item } = state.editingItem;
      const editedItem = ToDoService.editToDo(
        state.tasksStatuses,
        board,
        item,
        editingItem
      );

      if (
        !ToDoService.checkSameBoard(
          state.tasksStatuses[board].name,
          editingItem.boardStatus
        )
      ) {
        const { changeBoardIndex, currentBoard, changeBoard } =
          ToDoService.changeEditingItemBoard(
            state.tasksStatuses,
            editingItem.boardStatus,
            board,
            item,
            editedItem
          );
        state.tasksStatuses[board].items = currentBoard;
        state.tasksStatuses[changeBoardIndex].items = changeBoard;
      } else {
        state.tasksStatuses[board].items[item] = editedItem;
      }
    },
  },
});

export const {
  changeVisible,
  changeToDoItemState,
  changeTaskStatusState,
  changeAddToDoModalState,
  addToDo,
  setDragItem,
  setDropItem,
  changeEditToDoModalState,
  editToDoItem,
} = toDoSlicer.actions;

export default toDoSlicer;
