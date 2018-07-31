import React from 'react';

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const todoListItems = todos.map((todo) => (
      <li>{todo.title}</li>
    ));

    return (
      <ul>
        { todoListItems }
      </ul>
    );
  }
}

export default TodoList;
