import React, { Component } from 'react';
import './table.css';


class Table extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={ (event) => onToggle(id, event) }>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{ text }</div>
        </div>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default Table;
