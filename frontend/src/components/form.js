import React, { Component } from 'react';
import './form.css';


class Form extends Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
    this.onCreated = this.onCreated.bind(this);

    this.state = {
      title: '',
      content: '',
      deadlineDate: '',
      objectData: {}
    };
  }

  onChanged(component) {
    const { name, value } = component.target;
    const changedData = { ...this.state.objectData };
    changedData[name] = value;
    this.setState({
      [name]: value,
      objectData: changedData
    });
    if (this.props.onChanged) {
      this.props.onChanged(changedData);
    }
  }

  onCreated() {
    this.props.onCreated();
    this.setState({
      title: '',
      content: '',
      deadlineDate: ''
    });
  }

  render() {
    return(
      <div className="form">
        <input
          name="title"
          value={ this.state.title }
          onChange={ this.onChanged }
          placeholder="제목을 입력하세요."
        />
        &nbsp;&nbsp;
        <input
          name="content"
          value={ this.state.content }
          onChange={ this.onChanged }
          placeholder="내용을 입력하세요."
        />
        &nbsp;&nbsp;
        <input
          name="deadlineDate"
          value={ this.state.deadlineDate }
          onChange={ this.onChanged }
          type="date"
        />
        <button
          className="create-btn"
          type="button"
          onClick={ this.onCreated }>
          추가
        </button>
      </div>
    );
  }
};

export default Form;
