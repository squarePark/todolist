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
      deadlineDate: ''
    };
  }

  onChanged(component) {
    const { name, value } = component.target;
    const changedData = { ...this.props.data };
    changedData[name] = value;
    this.setState({
      [name]: value
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
    const { mode, data } = this.props;
    return(
      <div className="form">
        <input
          name="title"
          value={ data ? data.title : this.state.title }
          onChange={ this.onChanged }
          placeholder="제목을 입력 하세요."
        />
        &nbsp;&nbsp;
        <input
          name="content"
          value={ data ? data.content : this.state.content }
          onChange={ this.onChanged }
          placeholder="내용을 입력 하세요."
        />
        &nbsp;&nbsp;
        <input
          name="deadlineDate"
          value={ data ? data.deadlineDate : this.state.deadlineDate }
          onChange={ this.onChanged }
          type="date"
        />
        <button
          className="create-btn"
          type="button"
          onClick={ this.onCreated }
          style={{ background: mode ? '#dc3545' : null }}
        >
          { mode ? '수정' : '추가' }
        </button>
      </div>
    );
  }
};

export default Form;
