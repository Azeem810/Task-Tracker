import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";
import { IoAddCircleSharp } from "react-icons/io5";
import TaskList from "./TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setTaskTrackerList,
  getTaskTrackerList,
} from "../redux/slices/TaskTrackerSlice";

const TaskContainer = () => {
  const dispatch = useDispatch();
  const taskTrackerList = useSelector(getTaskTrackerList);
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    if (taskName === "") {
      toast.warn("Enter Task Name", {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      let previousTaskList = [...taskTrackerList];
      let newTask = {};
      newTask["taskName"] = taskName;
      newTask["done"] = false;
      previousTaskList.unshift(newTask);
      dispatch(setTaskTrackerList(previousTaskList));
      setTaskName("");
    }
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const countDoneTasks = taskTrackerList.reduce(
    (count, task) => {
      if (task.done) {
        count.done += 1;
      } else {
        count.notDone += 1;
      }
      return count;
    },
    { done: 0, notDone: 0 }
  );

  return (
    <div className="task-tracker-container">
      <ToastContainer />
      <h1>
        Task Tracker <GoTasklist style={{ marginTop: "15px" }} />
      </h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={handleEnterKeyPress}
          className="input-field"
        />
        <IoAddCircleSharp
          size={"45px"}
          onClick={handleAdd}
          style={{ cursor: "pointer", marginLeft: "10px", color: "#E7E30A" }}
        />
      </div>
      {taskTrackerList && taskTrackerList.length > 0 && (
        <div className="task-status">
          <div>
            <text className="task-status-text">Total Task</text>{" "}
            <text className="tasknumber">{taskTrackerList.length}</text>
          </div>
          <div>
            <text className="task-status-text">Completed</text>{" "}
            <text className="tasknumber">{countDoneTasks.done}</text>
          </div>
          <div>
            <text className="task-status-text">Pending</text>{" "}
            <text className="tasknumber">{countDoneTasks.notDone}</text>
          </div>
        </div>
      )}
      <div className="task-list-container">
        {taskTrackerList
          ? taskTrackerList.map((task, i) => (
              <TaskList
                key={i}
                index={i}
                taskName={task.taskName}
                isDone={task.done}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default TaskContainer;
