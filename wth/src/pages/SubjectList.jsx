import React, { Component } from 'react';
import Subject from './Subject';
import firebase from "firebase";
import "./SubjectList.css"

class SubjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: ["Algebra", "Fysica"]
        }
    }

    generateSubjects(number) {
        const active = Math.round(number / 100);
        let html = [];
        for (let i = 0; i < this.state.subjects.length; i++) {
            html.push(<div key={i} className=""> {this.state.subjects[i]}</div>)
        }
        return html
    }


    
    addCourse(){
        firebase
        .database()
        .ref('courses/' + "DB")
        .set({
            name: "Gegevensbanken",
            chapters: ["Hoofdstuk 1: SQL", "Hoodstuk 2: NOSQL"]
        })
    }

    /*
	render() {
		return (
			<div>

				SubjectList
				<Subject />

                <button onClick={this.addCourse}>Add</button>
			</div>
		);
	}
	*/
    render() {
    return (
    <div>
    <h1>Subjects </h1>
    {this.generateSubjects()}
    </div>
    );
}

}

export default SubjectList;
