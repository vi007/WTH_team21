import React, { Component } from 'react';
import fire from '../Fire';
// import firebase from "firebase/database";
import firebase from "firebase";

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

	

	render() {
		return (
			<div>
				<h1 className='headTitle'>Sign Up</h1>
				<div className=''>
                
                
					<div className='FormField'>

                    
                        <div>
						<input
							type="email"
							id="email"
							className="loginField fadeIn0"
							placeholder="Enter email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
                        </div>
					</div>
                    
                    
					<div className="FormField">

                        <div>
						<input
							type="password"
							id="password1"
							className="loginField fadeIn1"
							placeholder="Enter password"
							name="password1"
							value={this.state.password}
							onChange={this.handleChange}
						/>
                        </div>
                        
					</div>
					<div className="FormField">
                    
                        <div>
						<label className="FormField__Label" htmlFor="password2">
							Confirm password
						</label>
                        </div>
                        
                        <div>
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
                        
					</div>
					<button className='homeButton' onClick={this.signup}>sign up</button>
				</div>
			</div>
		);
	}
}

export default SignUp;
