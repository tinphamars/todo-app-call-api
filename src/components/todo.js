import React, { Component } from 'react';

class Todo extends Component {
	handleStatus = (id) => {
		this.props.toggleActive(id);
	}
	handleDelete = id => {
		this.props.removeItemTodo(id);
	}
	render() {
		var todo = this.props.todo;
		return (
			<div className="item-container">
				<span
					onClick={() => this.handleStatus(todo.id)}
					className={todo.completed === true ? "badge bg-dark text-light mgr-2rem" : "badge bg-success mgr-2rem"}>{todo.text}
				</span>
				<button onClick={() => this.handleDelete(todo.id)} className="btn btn-sm btn-danger remove-btn">X</button>
			</div>

		)
	}
}

export default Todo;