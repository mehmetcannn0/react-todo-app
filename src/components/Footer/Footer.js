import React from "react";

function Footer({ todos, activeFilter, setActiveFilter, setTodos }) {
  let activeItems = todos.filter((obj) => obj.done === false);
  function currentFilter(filter) {
    setActiveFilter(filter);
  }
  function Clear(e) {
    e.preventDefault();
    setTodos(activeItems);
    currentFilter("active");
  }
  return (
    <div className="footer">
      <footer>
        <ul>
          <li>{activeItems.length} items left</li>
          <li>
            <p
              className={activeFilter === "all" ? "selected" : ""}
              onClick={() => currentFilter("all")}
            >
              All
            </p>
          </li>
          <li>
            <p
              className={activeFilter === "active" ? "selected" : ""}
              onClick={() => currentFilter("active")}
            >
              Active
            </p>
          </li>
          <li>
            <p
              className={activeFilter === "completed" ? "selected" : ""}
              onClick={() => currentFilter("completed")}
            >
              Completed
            </p>
          </li>
          <li onClick={Clear}>Clear completed</li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
