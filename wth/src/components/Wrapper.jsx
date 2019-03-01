import React, { Component } from 'react';
import fire from '../Fire';
import Settings from '../pages/Settings';
import Deadlines from '../pages/Deadlines';
import SubjectList from '../pages/SubjectList';

class Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};
		this.logout = this.logout.bind(this);
	}

	logout() {
		fire.auth().signOut();
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setState({ value: 0 })}>Subjets</button>
				<button onClick={() => this.setState({ value: 1 })}>Deadlines</button>
				<button onClick={() => this.setState({ value: 2 })}>Settings</button>

				{this.state.value == 0 && <SubjectList />}
				{this.state.value == 1 && <Deadlines />}
				{this.state.value == 2 && <Settings />}
			</div>
		);
	}
}

export default Wrapper;
