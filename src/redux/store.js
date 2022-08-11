import { configureStore } from "@reduxjs/toolkit";
import toDoSlicer from "./toDoSlicer";

export const store = configureStore({
  reducer: {
    [toDoSlicer.name]: toDoSlicer.reducer,
  },
});
