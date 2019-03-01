import React, { Component } from 'react';

class CourseChooser extends Component {
    constructor() {
        super();
        this.state = {
            study : '',  
            selectedOptions : [],
            subjects: [
                'Google',
                'TED',
                'GitHub',
                'Big Think',
                'Microsoft',
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  logChange(val) {
        console.log("Selected: " + val);
    }

    renderSubjects() {
        let html = [];
        for (let i = 1; i <= 3; i++) {
            html.push(
                <h1 key={i}> {this.state.subjects[i]} </h1>)
            html.push(<div className="field"><input id="switchRoundedDefault" type="checkbox"
                                                    name="switchRoundedDefault" className="switch is-rounded"
                                                    checked="checked"/> <label htmlFor="switchRoundedDefault">Activate
                Dark mode</label></div>
            )
        }
        return html
    }


    render() {

        return (

            <div>CourseChooser

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit"/>
            </form>
                {this.renderSubjects()}
            </div>
        );
    }
}

export default CourseChooser;