import React, { Component } from 'react';
import CourseTab from './CourseTab';
import BulmaCheckradio from "bulma-checkradio";
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
                <button className="smallButton back posButton fadeIn0" onClick={this.props.onBack}></button>
				<h1 className="fadeIn0"> {this.props.course.name} </h1>

				<div className="fadeIn0 radioStyle">

  					<input 	
  						class="is-checkradio is-info"
						id="exampleCheckboxInfo"
						type="checkbox"
						checked={this.state.checkLectures}
						onChange={this.changedvalueLecture}
					/>
  					<label className="subjectLabel" for="exampleCheckboxInfo">Course</label>					
					
  					<input 	
  						class="is-checkradio is-info"
						id="exampleCheckboxInfo"
						type="checkbox"
						checked={this.state.checkExercises}
						onChange={this.changedvalueExercises}
					/>
  					<label className="subjectLabel" for="exampleCheckboxInfo">Exercises Sessions</label>		


  					<input 	
  						class="is-checkradio is-info"
						id="exampleCheckboxInfo"
						type="checkbox"
						checked={this.state.checkStudying}
						onChange={this.changedvalueStudying}
					/>
  					<label className="subjectLabel" for="exampleCheckboxInfo">Studying</label>		

					<CourseTab course={this.props.course} tab={"Chapters"}/>
				</div>
			</div>
		);
	}
}

export default Subject;
