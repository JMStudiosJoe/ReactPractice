import * as React from 'react';
// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';
import { sayHello } from "./helloComponent";
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("root", "fucking sucks this shit");
//------------------------------------------------- above works below needs to compile first

interface TodoTextInputProps {
  onSave: Function;
  text?: string;
  placeholder?: string,
  editing?: boolean;
  newTodo?: boolean;
}
class TodoTextInput extends React.Component<TodoTextInputProps, any> {
  render() {
    // ...
  }
}
