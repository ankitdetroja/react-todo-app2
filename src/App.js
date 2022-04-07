import react, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [currTask, setCurrtask] = useState("");
  const [list, setList] = useState([]);
  const inputTask = useRef(null);

  const addTask = () => {
    if (currTask !== "")
      setList([...list, { currTask: currTask, completed: false }]);
    inputTask.current.value = "";
    setCurrtask("");
  };

  const deleteTask = (taskToDelete) => {
    setList(
      list.filter((task) => {
        return task.currTask !== taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete) => {
    setList(
      list.map((task) => {
        return task.currTask == taskToComplete
          ? { currTask: task, completed: true }
          : {
              currTask: task.currTask,
              completed: task.completed ? true : false,
            };
      })
    );
  };

  return (
    <>
      <div className="App">
        <h1>TODO List</h1>
        <div>
          <input
            ref={inputTask}
            type="text"
            placeholder="Task..."
            value={currTask}
            onChange={(e) => setCurrtask(e.target.value)}
          ></input>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div>
        <ul>
          {list.map((task, index) => {
            return (
              <div>
                <li key={index}>{task.currTask}</li>
                <button onClick={() => deleteTask(task.currTask)}> X </button>
                <button onClick={() => completeTask(task.currTask)}>
                  completed
                </button>
                {task.completed ? (
                  <h3>Task completed</h3>
                ) : (
                  <h3>Not completed</h3>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
