const initialState = {
  dragItem: {
    board: "",
    item: "",
  },
  editToDoModalState: false,
  editingItem: {
    board: "",
    item: "",
  },
  tasksStatuses: [
    {
      name: "To Do",
      items: [
        {
          id: 0,
          title: "ToDO",
          description: "Wake Up",
          status: false,
          priority: "low",
          visible: false,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
        {
          id: 1,
          title: "wash Hands",
          description: "In morning go esimur",
          status: false,
          priority: "high",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
        {
          id: 2,
          title: "ToDO",
          description: "Wake Up",
          status: false,
          priority: "low",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
      ],
      show: true,
    },
    {
      show: true,
      name: "Doing",
      items: [
        {
          id: 3,
          title: "ToDO",
          description: "Wake Up",
          status: false,
          priority: "normal",
          visible: true,
          deadline: new Date(2022, 4, 24, 3, 12).getTime(),
        },
        {
          id: 4,
          title: "wash Hands",
          description: "In morning go esimur",
          status: false,
          priority: "high",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
        {
          id: 5,
          title: "ToDO",
          description: "Wake Up",
          status: false,
          priority: "low",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
        {
          id: 6,
          title: "wash Hands",
          description:
            "In morning go esimur sdfsad sdf dsf adsf sadf sadf asdf sadf asdf sdafdsfdsfsdfdsfdfdddddddddddddddddddddddddddddddddddddd",
          status: false,
          priority: "high",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
        {
          id: 7,
          title: "ToDO",
          description: "Wake Up",
          status: false,
          priority: "low",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
      ],
    },
    {
      name: "Done",
      show: true,
      items: [
        {
          id: 8,
          title: "Go Work",
          description: "Wake Up",
          status: true,
          priority: "low",
          visible: true,
          deadline: new Date(2022, 11, 24, 3, 12).getTime(),
        },
      ],
    },
  ],
  addToDoModalState: false,
};

export default initialState;
