import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>todolist</h2>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
