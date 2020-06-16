import React, { Component } from 'react';
import './todo-item.css';


class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onEdit, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={ () => onToggle(id) }>
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{ text }</div>
        </div>
        <div className="edit" onClick={(e) => {
          e.stopPropagation();
          onEdit(id)}
        }>edit</div>
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(id)}
        }>&times;</div>
      </div>
    );
  }
}

export default TodoItem;
