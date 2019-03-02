import React, { Component } from 'react';
import Subject from './Subject';
import firebase from "firebase";
import "./SubjectList.css"

class SubjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: ["Algebra", "Fysica", "Wiskunde"],
            descriptor: ["Due in 3 days", "Due to tomorrow", "Due in 2 days"]
        }
    }

    generateSubjects() {
        let html = [];
        for (let i = 0; i < this.state.subjects.length; i++) {
            html.push(
                <div className="subjectItem">
                    <div className="subjectPhoto"> </div>
                    <div key={i} className="subjectLabel"> {this.state.subjects[i]}</div><br/>
                    <div className="subjectDescriptor"> {this.state.descriptor[i]}</div>
                </div>

            );
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
