import * as React from 'react';
// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';
import { sayHello } from "./helloComponent";

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = sayHello(name);
// }
//
// showHello("root", "fucking sucks this shit");
//------------------------------------------------- above works below needs to compile first


import { TodoActions } from "../redux/actions";
import { reducers } from "../redux/reducers"; //reletive paths working? yes

interface Todo {
  id?: number;
  text: string;
  completed: boolean;
}

interface TodoTextInputProps {
  onSave: Function;
  text?: string;
  placeholder?: string,
  editing?: boolean;
  newTodo?: boolean;
}
// class TodoTextInput extends React.Component<TodoTextInputProps, any> {
//   render() {
    //   return (
      //
    //   );
        // const todos: Model = this.props.todos;
        // const dispatch = this.props.dispatch;
        // const actions = bindActionCreators(TodoActions, dispatch);

        // if (isInitializing(todos)) {
        //   const style = {
        //     'font-size': '24px',
        //     'text-align': 'center'
        //   };
        //   return <p style={style}>Initializing... ({todos.progress}%)</p>
        // } else {

        // }
//   }
// }

ReactDOM.render(
  <h1>now?</h1>, document.getElementById('root')
);
