import React, { Component } from 'react';
import './form.css';


class Form extends Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
    this.onCreate = this.onCreate.bind(this);

    this.state = {
      value: ''
    };
  }

  onChanged() {

  }

  onCreate() {

  }

  render() {
    return(
      <div className="form">
        <input
          name={ this.props.name }
          value={ this.state.value }
          onChange={ this.onChanged }
          placeholder="제목을 입력하세요."
        />
        &nbsp;&nbsp;
        <input
          name={ this.props.name }
          value={ this.state.value }
          onChange={ this.onChanged }
          placeholder="내용을 입력하세요."
        />
        &nbsp;&nbsp;
        <input
          name={ this.props.name }
          value={ this.state.value }
          onChange={ this.onChanged }
          type="date"
        />
        <button
          className="create-btn"
          type="button"
          onClick={ this.onCreate }>
          추가
        </button>
      </div>
    );
  }
};

export default Form;
