import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
		};
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div>
				{console.log(this.state.username)}
				{console.log(this.state.password)}
				<input type="text" value={this.state.username} />
				<input type="password" value={this.state.password} />
			</div>
		);
	}
}

export default Login;
