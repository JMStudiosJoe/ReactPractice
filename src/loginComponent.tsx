import * as React from "react";
interface LoginProps {
    username: string,
    password: string
}
class loginWindow extends React.Component<LoginProps, {}> {
    render() {
        return (
            <div>
                <div>{this.props.username} and {this.props.password}</div>
            </div>
        );
    }
}

export default loginWindow;
