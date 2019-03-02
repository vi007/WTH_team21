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
            <div className='centeredmain'>
			<div className='centeredmain'>            
				<input className='loginField' type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Username'/>
				<input className='loginField' type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password'/>
				
			</div>
            <div >
                <button className='homeButton' onClick={this.login}>Login</button>
            </div>
            </div>
		);
	}
}

export default Login;
