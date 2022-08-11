export default class dragDropService {
  static changeItemPlace(
    currentDragBoard,
    tasksStatuses,
    dragItem,
    board,
    item
  ) {
    const currentDropBoard = [...tasksStatuses[board].items];
    currentDropBoard.splice(item, 0, currentDragBoard[dragItem.item]);
    currentDragBoard.splice(dragItem.item, 1);
    if (tasksStatuses[board].name === "Done") {
      currentDropBoard[item].status = true;
    } else if (tasksStatuses[dragItem.board].name === "Done") {
      currentDropBoard[item].status = false;
    }

    return {
      currentBoard: currentDragBoard,
      currentDropBoard,
    };
  }

  static changeItemBoard(tasksStatuses, dragItem, currentDragBoard, column) {
    const currentDropBoard = [...tasksStatuses[column].items];
    currentDropBoard.push(currentDragBoard[dragItem.item]);
    currentDragBoard.splice(dragItem.item, 1);
    if (tasksStatuses[column].name === "Done") {
      currentDropBoard[currentDropBoard.length - 1].status = true;
    } else if (tasksStatuses[dragItem.board].name === "Done") {
      currentDropBoard[currentDropBoard.length - 1].status = false;
    }

    return {
      currentDropBoard,
      currentBoard: currentDragBoard,
    };
  }
}
