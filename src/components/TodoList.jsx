import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleEdit={() => handleEdit(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
        <button
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={handleClearList}
        >
          {" "}
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
