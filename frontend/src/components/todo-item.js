import React, { Component } from 'react';
import './todo-item.css';


class TodoItem extends Component {
  render() {
    const { title, date, checked, id, onToggle, onEdit, onRemove } = this.props;
    let checkDate = new Date();
    let month = checkDate.getMonth()+1 < 10 ? `0${checkDate.getMonth()+1}` : checkDate.getMonth()+1;
    const today = `${checkDate.getFullYear()}-${month}-${checkDate.getDate()}`;
    return (
      <div className="todo-item" onClick={ () => onToggle(id) }>
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>
            { title }
            <span
              style={{
                float: 'right', marginRight: 30, color: today > date ? '#dc3545' : null
              }}
            >
              { date }
            </span>
          </div>
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
