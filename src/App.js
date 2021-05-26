import React from 'react';
import './App.css';
import Todos from './components/todos';
import InputTodo from './components/inputTodo';

class App extends React.Component {

  render() {

    const handelRight = (text) => {
      this.props.actions.addTodo(text)
    }

    const handleActive = (id) => {
      this.props.actions.toggleActive(id)
    }

    const removeItemTodo = (id) => {
      this.props.actions.removeTodoItem(id)
    }

    return (
      <div className="container">
        <InputTodo placeholderInput={'Enter to add todo ... '} save={handelRight} />
        <Todos todoList={this.props.todos} toggleActive={handleActive} removeItemTodo={removeItemTodo} />
      </div>
    );
  }
}

export default App;


