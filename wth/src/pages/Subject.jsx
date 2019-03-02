import React, { Component } from 'react';
import CourseTab from './CourseTab';
//import BulmaCheckradio from "bulma-checkradio";
import bulmaSwitch from 'bulma-switch'; // Laten staan, wordt wel gebruikt zelf al zegt hij van niet.

class Subject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subjectName: 'Course Name',
			selectedTab: 0, // 0 = Lectures, 1= Exercises, 2= Studying
			checkLectures: true,
			checkExercises: false,
			checkStudying: false,
			chapters: ['Hoofdstuk 1', 'Hoofdstuk 2'],
		};

		this.changedvalueLecture = this.changedvalueLecture.bind(this);
		this.changedvalueExercises = this.changedvalueExercises.bind(this);
		this.changedvalueStudying = this.changedvalueStudying.bind(this);
	}

	changedvalueLecture() {
		this.setState({ selectedTab: 0 });
		this.setState({ checkLectures: true });
		this.setState({ checkExercises: false });
		this.setState({ checkStudying: false });
		console.log('lecture');
	}
	changedvalueExercises() {
		this.setState({ selectedTab: 1 });
		this.setState({ checkLectures: false });
		this.setState({ checkExercises: true });
		this.setState({ checkStudying: false });
	}
	changedvalueStudying() {
		this.setState({ selectedTab: 2 });
		this.setState({ checkLectures: false });
		this.setState({ checkExercises: false });
		this.setState({ checkStudying: true });
	}

	render() {
		return (
			<div className="">
				<h1> {this.props.course.name} </h1>
                <button className="smallButton back" onClick={this.props.onBack}></button>
				<div>
					
					<input
						className="is-checkradio is-danger"
						id="exampleCheckboxDanger"
						type="checkbox"
						name="exampleCheckboxDanger"
						checked={this.state.checkLectures}
						onChange={this.changedvalueLecture}
					/>
					<label htmlFor="exampleCheckboxDanger">Lectures</label>
					<input
						className="is-checkradio is-danger"
						id="exampleCheckboxDanger"
						type="checkbox"
						name="exampleCheckboxDanger"
						checked={this.state.checkExercises}
						onChange={this.changedvalueExercises}
					/>
					<label htmlFor="exampleCheckboxDanger">Exercises</label>
					<input
						className="is-checkradio is-danger"
						id="exampleCheckboxDanger"
						type="checkbox"
						name="exampleCheckboxDanger"
						checked={this.state.checkStudying}
						onChange={this.changedvalueStudying}
					/>
					<label htmlFor="exampleCheckboxDanger">Studying</label>
					<CourseTab course={this.props.course} tab={"Chapters"}/>
				</div>
			</div>
		);
	}
}

export default Subject;
