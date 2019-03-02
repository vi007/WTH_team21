import React, { Component } from 'react';
import fire from '../Fire';
import firebase from 'firebase';

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

	register(e) {
		if (this.state.password1 == this.state.password2) {
			e.preventDefault();
			fire.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(currentUser => {
					firebase
						.database()
						.ref('users/' + currentUser.user.uid)
						.set({
							email: currentUser.user.email,
							courses: ["DB", "LA"]
						});
				})
				.catch(error => {
					console.log(error);
				});
		}
	}

	render() {
		return (
            <div>
				<h1 className="boldLogin fadeIn0">Log in</h1>
			<div className='centeredmain'>            
				<input className='loginField fadeIn1' type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Username'/>
				<input className='loginField fadeIn2' type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password'/>
				
			</div>
            <div >
				<button className='homeButton1 fadeIn3' onClick={this.login}>Login</button>
				<button className='homeButton2 fadeIn3' onClick={this.register}>Register</button>
            </div>

            </div>
		);
	}
}

export default Login;
