import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "eat breakfast" }],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
  };

  handleSubmit = e => {
    console.log("handle Submit");
  };

  handleClearList = () => {
    console.log("handle clearlist");
  };

  handleEdit = id => {
    console.log(id);
  };

  handleDelete = id => {
    console.log(id);
  };

  render() {
    const { items, item, editItem } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              <TodoInput
                item={item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={editItem}
              />
              <TodoList
                items={items}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                handleClearList={this.handleClearList}
              />
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
