import React from 'react';
import './App.css';
import Todos from './components/todos';
import InputTodo from './components/inputTodo';
import Banner from './components/Banner';

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
        <Banner />
        <InputTodo placeholderInput={'Enter to add a todo ... '} save={handelRight} />
        <Todos todoList={this.props.todos} toggleActive={handleActive} removeItemTodo={removeItemTodo} />
      </div>
    );
  }
}

export default App;


