export const inputInfo = [
  {
    name: "title",
    element: "input",
    type: "text",
    placeholder: "Title...",
  },
  {
    name: "description",
    element: "input",
    type: "text",
    placeholder: "description...",
  },
  {
    name: "priority",
    element: "select",
    childe: [
      {
        value: "default",
        text: "Select your option",
        disabled: true,
      },
      {
        value: "low",
        text: "priority low",
        disabled: false,
      },
      {
        disabled: false,
        value: "normal",
        text: "priority normal",
      },
      {
        disabled: false,
        value: "high",
        text: "priority high",
      },
    ],
  },
  {
    name: "deadline",
    element: "input",
    type: "datetime-local",
  },
];

export const initialValueState = {
  title: "",
  description: "",
  deadline: "",
};
