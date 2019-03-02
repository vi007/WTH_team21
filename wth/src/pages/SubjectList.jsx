import React, { Component } from 'react';
import Subject from './Subject';

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
        if (active !== 4) {
            for (let j = 1; j <= 4-active; j++) {
                html.push(<div key={5+j} className="attributeValue"> </div>)
            }
        }
        return html
    }

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