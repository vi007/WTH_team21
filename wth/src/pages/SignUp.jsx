import React, { Component } from 'react';
import fire from '../Fire';

class SignUp extends Component {
	constructor(props) {
		super(props);
		// TODO: Ilias
		this.state = {
			email: '',
			password1: '',
			password2: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.signup = this.signup.bind(this);
	}

	handleChange(e) {
		let target = e.target;
		let value = target.value;
		let name = target.name;

		this.setState({
			[name]: value,
		});
	}

	signup(e) {
		if (this.state.password1 == this.state.password2) {
			e.preventDefault();
			fire.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password1)
				.catch(error => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<div>
				{console.log(this.state.email)}
				{console.log(this.state.password1)}
				{console.log(this.state.password2)}
				<h1> Sign Up</h1>
				<div className="">
					<div className="FormField">
						<label className="FormField__Label" htmlFor="email">
							Username
						</label>
						<input
							type="email"
							id="email"
							className="FormField__Input"
							placeholder="Enter email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password1"
							className="FormField__Input"
							placeholder="Enter password"
							name="password1"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="password2">
							Confirm password
						</label>
						<input
							type="password"
							id="password2"
							className="FormField__Input"
							placeholder="Repeat password"
							name="password2"
							value={this.state.password2}
							onChange={this.handleChange}
						/>
					</div>
					<button onClick={this.signup}>sign up</button>
				</div>
			</div>
		);
	}
}

export default SignUp;
