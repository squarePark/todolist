import React, { Component } from 'react';
import './todo-list-template.css';


class TodoListTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main className="todo-list-template">
        <div className="title">
          Todo List
        </div>
        <section className="form-wrapper">
          aaa
        </section>
        <section className="todos-wrapper">
          bbb
        </section>
      </main>
    );
  }
}

export default TodoListTemplate;
