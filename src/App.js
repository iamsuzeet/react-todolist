import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItem = [...this.state.items, newItem];

    this.setState(
      {
        items: updatedItem,
        item: "",
        id: uuid(),
        editItem: false
      },
      () => console.log(this.state)
    );
  };

  handleClearList = () => {
    this.setState({ items: [] });
  };

  handleEdit = id => {
    const newItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: newItems,
      item: selectedItem.title,
      id: selectedItem.id,
      editItem: true
    });
  };

  handleDelete = id => {
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItems });
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
