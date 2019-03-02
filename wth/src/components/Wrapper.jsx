import React, { Component } from 'react';
import fire from '../Fire';
import Settings from '../pages/Settings';
import Deadlines from '../pages/Deadlines';
import SubjectList from '../pages/SubjectList';
import CourseChooser from '../pages/CourseChooser';
import CourseTab from '../pages/CourseTab';

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
				<button onClick={() => this.setState({ value: 3 })}>CourseChooser</button>
				<button onClick={() => this.setState({ value: 4 })}>CourseTab</button>

                <button onClick={() => this.logout}>logout</button>

				{this.state.value == 0 && <SubjectList />}
				{this.state.value == 1 && <Deadlines />}
				{this.state.value == 2 && <Settings />}
				{this.state.value == 3 && <CourseChooser />}
				{this.state.value == 4 && <CourseTab />}
			</div>
		);
	}
}

export default Wrapper;
