import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {

    render() {
        var list = this.props.todoList;
        return (
            <div className="todo_list">
                {
                    list.map(item => <Todo key={item.id} todo={item} toggleActive={this.props.toggleActive} removeItemTodo={this.props.removeItemTodo} />)
                }
            </div>
        );
    }
}

export default Todos;