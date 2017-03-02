import * as React from "react";

interface HelloProps {
  name: string;
}


class HelloJoey extends React.Component<HelloProps, {}> {
  render() {
    return (
        <div>Hello, {this.props.name}
            THE MAIN PAGE YO
        </div>
    );
  }
}

export default HelloJoey;
