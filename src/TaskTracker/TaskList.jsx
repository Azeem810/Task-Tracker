import React from "react";
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getTaskTrackerList,
  setTaskTrackerList,
} from "../redux/slices/TaskTrackerSlice";
import { FaCheckSquare } from "react-icons/fa";

const TaskList = ({ taskName, isDone, index }) => {
  const dispatch = useDispatch();
  const taskTrackerList = useSelector(getTaskTrackerList);
  const handleDelete = () => {
    let allTaskList = [...taskTrackerList];

    allTaskList.splice(index, 1);
    dispatch(setTaskTrackerList(allTaskList));
  };

  const handleIsTaskDone = () => {
    let allTaskList = [...taskTrackerList];
    allTaskList[index] = {
      ...allTaskList[index],
      done: !allTaskList[index].done,
    };
    dispatch(setTaskTrackerList(allTaskList));
  };

  const checkboxStyle = {
    cursor: "pointer",
    marginRight: "15px",
  };

  const deleteIconStyle = {
    cursor: "pointer",
    color: "#f70000",
    marginRight: "8px",
  };

  return (
    <div className="task-list">
      <ul>
        <li>
          <div className={`task-list-name ${isDone && "donetask"}`}>
            {taskName}
          </div>
          <div>
            {isDone ? (
              <FaCheckSquare
                size={28}
                style={checkboxStyle}
                color="#03830f"
                onClick={handleIsTaskDone}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                size={28}
                style={checkboxStyle}
                onClick={handleIsTaskDone}
              />
            )}{" "}
            <MdDelete
              size={35}
              style={deleteIconStyle}
              onClick={handleDelete}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
