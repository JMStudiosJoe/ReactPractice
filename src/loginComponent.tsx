import * as React from "react";
interface LoginProps {
    username?: string,
    password?: string
}

var myStyle = {
    backgroundColor:"red",
    padding:"10px"
};
                                        /*<props passed in, state types? can assign the state type here>*/
class loginWindow extends React.Component<LoginProps, LoginProps> {
    constructor() {
        super();
        this.state = ({} as LoginProps);

        this.login = this.login.bind(this);
        this.usernameValidator = this.usernameValidator.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);

    }

    usernameValidator = (event: React.KeyboardEvent) => {

        const username = (event.target as HTMLInputElement).value;
        this.setState({
            username: username,
        });

    }

    passwordHandler = (event: React.KeyboardEvent) => {
        const password = (event.target as HTMLInputElement).value;
        this.setState({
            password: password,
        });
    }

    login = (event: any) => {
        console.log(this.state);
    }
    render() {
        return (
            <div>

                <label>Username:</label><input name="username" type="text" value={this.state.username} onChange={this.usernameValidator} />
                <label>Password:</label><input name="password" type="text" value={this.state.password} />
                <button onClick={this.login}>Submit</button>

            </div>
        );
    }
}

export default loginWindow;
