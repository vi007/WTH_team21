import React, { Component } from 'react';
import fire from '../Fire';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};

		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let target = e.target;
		let value = target.value;
		let name = target.name;

		this.setState({
			[name]: value,
		});
	}

	login(e) {
		e.preventDefault();
		fire.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(u => {})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				{console.log(this.state.email)}
				{console.log(this.state.password)}
				<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
				<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
				<button onClick={this.login}>Login</button>
			</div>
		);
	}
}

export default Login;
