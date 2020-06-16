import React, { Component } from 'react';
import axios from 'axios';
import Form from './form';
import TodoItem from './todo-item';
import {ApiHandler} from "../modules/api-handler";

import './todo-list-template.css';


class TodoListTemplate extends Component {
  constructor(props) {
    super(props);

    this.getTodoList = this.getTodoList.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onChanged = this.onChanged.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onRemove = this.onRemove.bind(this);

    this.state = {
      data: [],
      objectData: null
    };
  }

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList() {
    // rest 호출
    axios.get(ApiHandler.buildUrl(['todolist']))
      .then((response) => {
        const result = response.data;
        this.setState({
          data: result
        });
      });
  }

  onToggle(id) {
    const changeData = [ ...this.state.data ];
    let result = {};
    changeData.map((item) => {
      if (item.id === id) {
        if (item.checkedYn === 'Y') {
          item.checkedYn = 'N';
        } else {
          item.checkedYn = 'Y';
        }
        result = item;
      }
      return result;
    });
    this.setState({ objectData: result });
    this.onSave(result);
  }

  onChanged(rowData) {
    rowData.checkedYn = 'N';
    this.setState({
      objectData: rowData
    });
  }

  onSave(changeData) {
    let params = { ...this.state.objectData };
    if (changeData) {
      params = { ...changeData };
    }
    axios.put(ApiHandler.buildUrl(['todolist', 'save']), params)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            objectData: null
          });
          this.getTodoList();
        }
      });
  }

  onRemove(id) {
    axios.delete(ApiHandler.buildUrl(['todolist', 'delete', id]))
      .then((response) => {
        if (response.status === 200) {
          this.getTodoList();
        }
      });
  }

  render() {
    return (
      <main className="todo-list-template">
        <div className="title">
          TODO List
        </div>
        <section className="form-wrapper">
          <Form
            data={ this.state.objectData }
            onChanged={ this.onChanged }
            onCreated={ this.onSave }
          />
        </section>
        <section className="todo-wrapper">
          { this.state.data.length > 0 ?
            this.state.data.map((item, index) => {
              return (
                <TodoItem
                  key={ `todo-item-${index}` }
                  id={ item.id }
                  text={ `${item.title}` }
                  onToggle={ this.onToggle }
                  checked={ item.checkedYn === 'Y' ? true : false }
                  onRemove={ this.onRemove }
                />
              )
            })
           : null }
        </section>
      </main>
    );
  }
}

export default TodoListTemplate;
