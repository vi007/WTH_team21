import React, { Component } from 'react';
import fire from '../Fire';
import Settings from '../pages/Settings';
import SubjectList from '../pages/SubjectList';
import Subject from '../pages/Subject';
import CourseChooser from '../pages/CourseChooser';
import CourseTab from '../pages/CourseTab';
import { Grid } from '@material-ui/core';


class Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};
		this.logout = this.logout.bind(this);
	}

	logout() {
        console.log("signouts");
        fire.auth().signOut();
        
	}

	render() {
		return (
			<div>
                {console.log(this.props.user)}
{/* 
				<button onClick={() => this.setState({ value: 0 })}>SubjectList</button>
				<button onClick={() => this.setState({ value: 2 })}>Settings</button>
				<button onClick={() => this.setState({ value: 3 })}>CourseChooser</button>
				<button onClick={() => this.setState({ value: 4 })}>Subject</button> */}

                {/* <button onClick={this.logout}>logout</button> */}

				{this.state.value == 0 && <SubjectList />}
				{this.state.value == 1 && <div />}
				{this.state.value == 2 && <Settings />}
			

				<Grid container style={{position: "fixed", bottom: 0}}> 
					<Grid item xs={4} onClick={() => this.setState({ value: 0 })} style={{background: "#6E9FFD", height: 40}}><div className="subject" ></div></Grid>
					<Grid item xs={4} onClick={() => this.setState({ value: 1 })} style={{background: "#6E9FFD", height: 40}}><div className="tasks" ></div></Grid>
					<Grid item xs={4} onClick={() => this.setState({ value: 2 })} style={{background: "#6E9FFD", height: 40}}><div className="settings" ></div></Grid>
				</Grid>

			</div>
		);
	}
}

export default Wrapper;
