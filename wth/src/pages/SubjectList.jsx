import React, { Component } from 'react';
import Subject from './Subject';
import firebase from 'firebase';
import './SubjectList.css';
import Course from '../Course';

class SubjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			descriptor: ['Due in 3 days', 'Due to tomorrow', 'Due in 2 days', 'Due in 3 days', 'Due next week'],
			data: [],
			userCourses: [],
			subject: null,
		};

		this.getCourses = this.getCourses.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}

	async componentDidMount() {
		this.getCourses();
	}

	generateSubjects() {
		let html = [];
		for (let i = 0; i < this.state.data.length; i++) {
			let fade = 'subjectItem  fadeIn' + i;
			html.push(
				<div className={fade} key={i} onClick={() => this.setState({ subject: this.state.data[i] })}>
					<div className="subjectPhoto"> </div>
					<div className="subjectLabel "> {this.state.data[i].name}</div>
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
			.ref('courses/' + 'CN')
			.set({
				name: 'Computer Networks',
				chapters: [
					'Hoofdstuk 1: Telnet',
					'Hoofdstuek 2: DNS',
					'Hoofdstuk 3: FTP',
					'Hoodstuk 4: TOR',
					'Hoofdstuk 5: Bit-torrent',
				],
			});
	}

	handleBack() {
		this.setState({ subject: null });
	}

	generateTitle() {
	    if (this.state.subject == null) {
            return (<h1 className="fadeIn0" id="">Subjects </h1>)
        }
	    return (<div></div>);

    }

	render() {
		return (
			<div>
                {this.generateTitle()}
				{this.state.subject == null && this.generateSubjects()}

				{this.state.subject !== null && <Subject onBack={this.handleBack} course={this.state.subject} />}

				<button onClick={this.addCourse} />
			</div>
		);
	}
}

export default SubjectList;
