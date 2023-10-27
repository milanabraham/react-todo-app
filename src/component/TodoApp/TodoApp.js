import React, { Component } from "react";
import "./TodoApp.css";
export default class todoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input : ""
    });
  };

  deleteItem = key => {
    // console.log(key);
    // const allItems = this.state.items;
    // allItems.splice(key, 1);
    this.setState({
    //   items : allItems

      items : this.state.items.filter((data , index) => index !== key)
    });
  };



  render() {
    const { input, items } = this.state;
    // console.log(items);
    return (
      <div className="todo-container">
        <h1>Todo App</h1>

        <form onSubmit={this.storeItems} className="input-section">
          <input type="text" value={input} onChange={this.handleChange} />
          <button>ADD</button>
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>{data}  <button onClick={() => this.deleteItem(index)}>Delete</button></li>
          ))}
        </ul>
      </div>
    );
  }
}
