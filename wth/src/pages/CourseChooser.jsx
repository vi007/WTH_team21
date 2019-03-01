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
            ],
            checked: []
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




    changedValue(){
        this.setState({check: ! this.state.check});
    }

    renderSubjects() {
        let html = [];

        var data = [];
        var length = this.state.subjects.length; // user defined length

        for(var i = 0; i < length; i++) {
            data.push(false);
        }

        this.setState({
            subjects: data
        })
        for (let i = 0; i < this.state.subjects.length; i++) {
            html.push(
                <h1 key={i}> {this.state.subjects[i]} </h1>)
            html.push(<div className="field"><input id={i} type="checkbox"
                                                    name="switchRoundedDefault" className="switch is-rounded"
                                                    checked={this.state.checked[i]} onChanged={this.changedValue(i)}/> <label htmlFor="switchRoundedDefault"> </label></div>
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