import { v4 as uuidv4 } from "uuid";

export default class ToDoService {
  static checkToDoValidation(title, description, priority, deadline, edit) {
    if (
      !title ||
      !description ||
      !priority ||
      !deadline ||
      (!edit ? new Date().getTime() > new Date(deadline).getTime() : false)
    ) {
      return false;
    } else {
      return true;
    }
  }

  static createErrorForm(title, description, priority, deadline) {
    const errorObj = {
      title: title ? "" : "invalid data",
      description: description ? "" : "invalid data",
      priority: priority ? "" : "invalid data",
      deadline: !deadline
        ? "invalid data"
        : deadline && new Date(deadline).getTime() < new Date().getTime()
        ? "Wrong date"
        : "",
    };
    return errorObj;
  }

  static changeItemVisibility(currentCategory, index) {
    const currentItem = { ...currentCategory.items[index] };
    currentItem.visible = !currentItem.visible;
    currentCategory.items[index] = currentItem;

    return currentCategory;
  }

  static changeItemState(tasksStatuses, taskStatusIndex, index) {
    const currentCategory = [...tasksStatuses[taskStatusIndex].items];
    const moveCategoryIndex =
      tasksStatuses[taskStatusIndex].name === "Done" ? 1 : 2;
    const categoryForMove = [...tasksStatuses[moveCategoryIndex].items];

    const currentItem = { ...currentCategory[index] };
    currentItem.status = !currentItem.status;
    currentCategory[index] = currentItem;
    categoryForMove.unshift(currentCategory[index]);
    currentCategory.splice(index, 1);

    return {
      currentCategory,
      moveCategoryIndex,
      categoryForMove,
    };
  }
  static createItem(title, description, priority, deadline) {
    const newToDo = {
      id: uuidv4(),
      title,
      description,
      status: false,
      priority,
      visible: true,
      deadline: new Date(deadline).getTime(),
    };

    return newToDo;
  }
  static editToDo(tasksStatuses, board, item, editingItem) {
    const currentItem = { ...tasksStatuses[board].items[item] };
    currentItem.description = editingItem.description;
    currentItem.title = editingItem.title;
    currentItem.deadline = editingItem.deadline;
    currentItem.priority = editingItem.priority;
    return currentItem;
  }

  static checkSameBoard(name, boardStatus) {
    if (name.replace(/\s+/g, "").toLowerCase() === boardStatus.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  static changeEditingItemBoard(
    tasksStatuses,
    boardStatus,
    board,
    item,
    editedItem
  ) {
    if (boardStatus === "done") {
      editedItem.status = true;
    } else if (editedItem.status) {
      editedItem.status = false;
    }
    const changeBoardIndex = tasksStatuses.findIndex(
      (el) =>
        el.name.replace(/\s+/g, "").toLowerCase() === boardStatus.toLowerCase()
    );
    const changeBoard = [...tasksStatuses[changeBoardIndex].items];
    changeBoard.unshift(editedItem);
    const currentBoard = [...tasksStatuses[board].items];
    currentBoard.splice(item, 1);

    return {
      changeBoardIndex: changeBoardIndex,
      currentBoard: currentBoard,
      changeBoard: changeBoard,
    };
  }
}
