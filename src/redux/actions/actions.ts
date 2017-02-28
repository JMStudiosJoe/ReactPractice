const addTodo = createAction<Todo>(
  types.ADD_TODO,
  (text: string) => ({ text, completed: false })
);

export addTodo;
