import React, { Component } from 'react';
import Subject from './Subject';
import firebase from 'firebase';
import './SubjectList.css';
import Course from '../Course';

class SubjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subjects: ['Algebra', 'Fysica', 'Wiskunde'],
			descriptor: ['Due in 3 days', 'Due to tomorrow', 'Due in 2 days'],
			data: [],
		};

		this.getCourses = this.getCourses.bind(this);
    }
    
    componentDidMount(){
        this.getCourses();
    }

	generateSubjects() {
		let html = [];
		for (let i = 0; i < this.state.subjects.length; i++) {
			let fade = 'subjectItem  fadeIn' + i;
			html.push(
				<div className={fade}>
					<div className="subjectPhoto"> </div>
					<div key={i} className="subjectLabel ">
						{' '}
						{this.state.subjects[i]}
					</div>
					<br />
					<div className="subjectDescriptor"> {this.state.descriptor[i]}</div>
				</div>
			);
		}
		return html;
	}

	getCourses() {
		firebase
			.database()
			.ref()
			.child('courses')
			.on('value', snap => {
				let values = snap.val();
				for (let key in values) {
					this.setState(
						{ data: [...this.state.data, new Course(key, values[key].name, values[key].chapters)] },
						() => console.log(this.state)
					);
				}
			});
	}

	addCourse() {
		firebase
			.database()
			.ref('courses/' + 'LA')
			.set({
				name: 'Lineaire Algebra',
				chapters: ['Hoofdstuk 1: Inleiding', 'Hoodstuk 2: Vectoren'],
			});
	}

	render() {
		return (
			<div>
				SubjectList
				<Subject />
				
			</div>
		);
	}

	// render() {
	// return (
	// <div>
	// <h1 className="fadeIn0">Subjects </h1>
	// {this.generateSubjects()}
	// </div>
	// );
}

export default SubjectList;
