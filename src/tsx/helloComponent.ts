// import * as React from "react";
//
// interface HelloProps {
//   name: string;
// }
//
// class HelloJoey extends React.Component<HelloProps, {}> {
//   render() {
//     return <div>Hello, {this.props.name}</div>;
//   }
// }
//
// export default HelloJoey;
export function sayHello(name: string) {
    return `Hello from ${name}`;
}
