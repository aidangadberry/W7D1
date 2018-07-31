const allTodos = ({todos}) => {
  const todoList = [];

  Object.keys(todos).forEach((todoId) => {
    todoList.push(todos[todoId]);
  });

  return todoList;
}

export default allTodos;
