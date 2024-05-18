import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/Todo-item";
import Btn from "./components/Button"
import './style.css'
function App() {
  return (
    <div className="todo-container">
      <Header title="Todoie App"/>
      <TodoItem completed={true} title="Eat"/ >
      <TodoItem title="Sleep"/>
      <TodoItem completed={true} title="Code" />
      <TodoItem title="Repeat"/>
      <TodoItem title="Study"/>
      <Btn/>
    </div>
  );
}

export default App;
