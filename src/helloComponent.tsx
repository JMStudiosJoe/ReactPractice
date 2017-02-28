import * as React from "react";

interface HelloProps {
  name: string;
}


class HelloJoey extends React.Component<HelloProps, {}> {
  render() {
    return (
        <div>Hello, {this.props.name}

        </div>
    );
  }
}

export default HelloJoey;
