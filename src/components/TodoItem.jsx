import React from "react";

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={handleEdit}>
          {" "}
          <i className="fas fa-pen" />
        </span>

        <span className="mx-2 text-danger" onClick={handleDelete}>
          {" "}
          <i className="fas fa-trash-alt" />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
