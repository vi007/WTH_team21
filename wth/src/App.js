import React, { Component } from 'react';
import HomePage from './pages/Home';
import fire from './Fire.js';
import Wrapper from './components/Wrapper';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
		};

		this.authListener = this.authListener.bind(this);
	}

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		fire.auth().onAuthStateChanged(user => {
			console.log(user);
			if (user) {
				this.setState({ user });
				localStorage.setItem('user', user.uid);
			} else {
				this.setState({ user: null });
				localStorage.removeItem('user');
			}
		});
	}

	render() {
		return <div>{this.state.user == null ? <HomePage /> : <Wrapper />}</div>;
	}
}

export default App;
