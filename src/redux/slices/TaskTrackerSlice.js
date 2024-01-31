import { createSlice } from "@reduxjs/toolkit";
export const TaskTrackerSlice = createSlice({
  name: "TaskTrackerSlice",
  initialState: {
    taskTrackerList: JSON.parse(localStorage.getItem("taskTrackerList")) || [],
  },
  reducers: {
    setTaskTrackerList: (state, action) => {
      state.taskTrackerList = action.payload;
      localStorage.setItem("taskTrackerList", JSON.stringify(action.payload));
    },
  },
});
export const { setTaskTrackerList } = TaskTrackerSlice.actions;

export const getTaskTrackerList = (state) =>
  state.TaskTrackerSlice.taskTrackerList;

export default TaskTrackerSlice.reducer;
