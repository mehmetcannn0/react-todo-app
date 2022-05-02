import React from "react";

function List({ todos, setTodos, activeFilter }) {
  function currentCheck(index) {
    let newArray = [...todos];
    newArray[index]["done"] = todos[index]["done"] ? false : true;
    setTodos(newArray);
  }
  function currentDestroy(index) {
    let newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  }
  return (
    <ul className="list">
      {todos.map((elemet, index) => {
        return (
          <li
            key={index}
            className={elemet.done ? "completed" : ""}
            style={{
              display:
                (elemet.done && activeFilter === "active") ||
                (!elemet.done && activeFilter === "completed")
                  ? "none"
                  : "block",
            }}
          >
            <div className="view">
              {
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={() => currentCheck(index)}
                  checked={elemet.done}
                />
              }
              <label>{elemet.todo}</label>

              <button className="destroy" onClick={() => currentDestroy(index)}>
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
