import React, { Component } from 'react';
import Subject from './Subject';
import firebase from 'firebase';
import './SubjectList.css';
import Course from '../Course';

class SubjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			descriptor: ['Due in 3 days', 'Due to tomorrow', 'Due in 2 days'],
            data: [],
            subject: null
		};

		this.getCourses = this.getCourses.bind(this);
	}

	componentDidMount() {
		this.getCourses();
	}

	generateSubjects() {
		let html = [];
		for (let i = 0; i < this.state.data.length; i++) {
			let fade = 'subjectItem  fadeIn' + i;
			html.push(
                    <div className={fade} key={i} onClick={() => this.setState({subject: this.state.data[i]})}>
					<div className="subjectPhoto"> </div>
					<div className="subjectLabel ">
						{' '}
						{this.state.data[i].name}
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
			.ref('courses/' + 'RLZ')
			.set({
				name: 'Religie',
				chapters: ['Hoofdstuk 1: Religie', 'Hoodstuk 2: Antropoceen'],
			});
	}


	render() {
		return (
			<div>
				<h1 className="fadeIn0">Subjects </h1>
                {this.state.subject == null && this.generateSubjects()}

                {this.state.subject !== null && <Subject course={this.state.subject}></Subject>}

                
                <button onClick={this.addCourse}></button>
			</div>
		);
	}
}

export default SubjectList;
