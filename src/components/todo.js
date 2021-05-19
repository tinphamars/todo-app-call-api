import React, { Component } from 'react';

class Todo extends Component {
	handleStatus = (id) => {
		this.props.toggleActive(id);
	}
	render() {
		var todo = this.props.todo;
		return (
			<span
				onClick={() => this.handleStatus(todo.id)}
				className={todo.completed === true ? "badge bg-dark text-light mgr-2rem" : "badge bg-info text-dark mgr-2rem"}>{todo.text}</span>
		)
	}
}

export default Todo;