import React, { Component } from 'react';
import './todo-list-template.css';
import Form from "./form";
import Table from "./table";


class TodoListTemplate extends Component {
  constructor(props) {
    super(props);

    this.onToggle = this.onToggle.bind(this);

    this.state = {
      checked: false
    };
  }

  onToggle(id, event) {
    console.log(event.target);
  }

  render() {
    return (
      <main className="todo-list-template">
        <div className="title">
          TODO List
        </div>
        <section className="form-wrapper">
          <Form />
        </section>
        <section className="todo-wrapper">
          <Table
            text="하이룽"
            onToggle={ this.onToggle }
            checked={ this.state.checked }
          />
        </section>
      </main>
    );
  }
}

export default TodoListTemplate;
