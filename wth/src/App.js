import React, { Component } from 'react';
import HomePage from './pages/Home';
import fire from './Fire.js';
import Wrapper from './components/Wrapper';
import Subject from './pages/Subject';

class App extends Component {
	constructor(props) {
		super(props);
		document.body.style = 'background: #EDEDED;';

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
		if (this.state.user === null){
			return <HomePage></HomePage>
		} else{
			return <Wrapper user={this.state.user} />
		}
		
	}
}

export default App;
