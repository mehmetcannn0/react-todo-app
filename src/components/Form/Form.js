import { useState } from "react";

function Form({ todos, setTodos }) {
  const [newTodo, setnewTodo] = useState("");
  function currentEntry(e) {
    if (e.key === "Enter") {
      // console.log(newTodo);
      let newEntry = {
        todo: newTodo,
        done: false,
      };
      let newSetTodos = [...todos, newEntry];
      setTodos(newSetTodos);
      setnewTodo("");
    }
  }
  return (
    <div className="form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => setnewTodo(e.target.value)}
        value={newTodo}
        onKeyDown={currentEntry}
      />
    </div>
  );
}

export default Form;
