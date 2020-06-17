import React, { Component } from 'react';
import './todo-item.css';
const placeholder = document.createElement("div");
placeholder.className = "placeholder";


class TodoItem extends Component {
  onDragStart(event) {
    const element = event.target;
    const id = element.id;
    event.dataTransfer.setData('text', id);
  }
  onDragEnd(event) {
    event.preventDefault();
    const place = document.getElementsByClassName('placeholder');
    place[0].parentNode.removeChild(place[0]);
  }

  onDragOver(event) {
    event.preventDefault();
    if(event.target.className === 'placeholder') return;
    event.target.parentNode.insertBefore(placeholder, event.target);
  }

  render() {
    const { title, date, checked, id, onToggle, onEdit, onRemove } = this.props;
    const checkDate = new Date();
    const month = checkDate.getMonth()+1 < 10
      ? `0${checkDate.getMonth()+1}` : checkDate.getMonth()+1;
    const today = `${checkDate.getFullYear()}-${month}-${checkDate.getDate()}`;

    return (
      <div
        key={ id }
        name={ id }
        id={ id }
        className="todo-item"
        onClick={ () => onToggle(id) }
        draggable="true"
        onDragStart={ this.onDragStart.bind(this) }
        onDragEnd={ this.onDragEnd.bind(this) }
      >
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className={ `todo-text ${checked && 'checked'}` } onDragOver={ this.onDragOver.bind(this) }>
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
        <div
          className="edit"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(id)}
          }
        >
          edit
        </div>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id)}
          }
        >
          &times;
        </div>
      </div>
    );
  }
}

export default TodoItem;
