import React, { Component } from 'react';
import Subject from './Subject';
import firebase from "firebase";

class SubjectList extends Component {
    constructor(props){
        super(props);

        this.state = {

        }

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


	render() {
		return (
			<div>


            


				SubjectList
				<Subject />

                <button onClick={this.addCourse}>Add</button>
			</div>
		);
	}
}

export default SubjectList;
