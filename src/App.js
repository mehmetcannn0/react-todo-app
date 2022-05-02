import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import "./components/style.css";
import { useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([
    { todo: "yapılacaklar 1", done: true },
    { todo: "yapılacaklar 2", done: true },
    { todo: "yapılacaklar 3", done: false },
  ]);
  useEffect(() => {
    console.log(todos);
  });
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} activeFilter={activeFilter} />
      <Footer
        todos={todos}
        setTodos={setTodos}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </div>
  );
}

export default App;
