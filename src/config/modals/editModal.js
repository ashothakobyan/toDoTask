const statusSelect = {
  name: "boardStatus",
  element: "select",
  childe: [
    {
      value: "toDO",
      text: "To Do",
      disabled: false,
    },
    {
      disabled: false,
      value: "doing",
      text: "Doing",
    },
    {
      disabled: false,
      value: "done",
      text: "Done",
    },
  ],
};

export default statusSelect;
