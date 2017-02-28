export interface Initializing {
  progress: number;
};

// The model of our state can be either of these types.
export interface Model {
  todos?: Todo[];
  isInitializing: boolean;
  initializationProgress: number;
}

// Check if x is a type of Initializing. This can be used in type guards.
export const isInitializing = (x: any): x is Initializing => {
  return typeof x.progress === 'number';
}

export default handleActions<Model>({
  [ADD_TODO]: (state: Model, action: Action): Model => {
    let todos: Todo[];

    // Type guard for state.
    if (isInitializing(state)) {
      // If current state is initializing, set todos to empty array.
      todos = [];
    } else {
      // Otherwise set to current state.
      todos = state;
    }

    return [{
      id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...todos];
  }
  // ...
});
