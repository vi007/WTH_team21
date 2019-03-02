import React, { Component } from 'react';

class CourseChooser extends Component {
    constructor() {
        super();
        this.state = {
            study : '',
            selectedOptions : [],
            subjects: [],
            checked : [false,true,false]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
    }

  handleChange(event) {
    this.setState({study: event.target.value});
    //alert('change: ' + this.state.study);
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.study);
    event.preventDefault();
    this.setState({subjects : ['Lineaire Algebra',
                                'Toepassingen van de Meetkunde',
                                'Artificiële Intelligentie']})
  }

  logChange(val) {
        console.log("Selected: " + val);
    }




changedvalue(){
    this.setState({check: ! this.state.check});
}

    renderSubjects() {
        let html = [];
        for (let i = 0; i < this.state.subjects.length; i++) {
            html.push(
                <h1> {this.state.subjects[i]} </h1>)
            html.push(<div className="field"><input id={i} type="checkbox"
                                                    name="switchRoundedDefault" className="switch is-rounded"
                                                    checked={this.state.checked[i]} onChange={() => this.handleSwitch(i)}/> <label htmlFor="switchRoundedDefault"></label></div>
            )
        }
        html.push(<p><button type="button">Save</button></p>)
        return html
    }


    handleSwitch(id) {
      //let array = this.state.checked;
      //array[id] = ! array[id];
      alert('switched' + id);
      this.state.checked[id] = ! this.state.checked[id] ;
      this.state.selectedOptions.push(this.state.checked[id]);

    }

    render() {

        return (

            <div>CourseChooser

            <form onSubmit={this.handleSubmit}>
                <label>
                    Study:
                    <input type="text" value={this.state.study} onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit"/>
            </form>
                {this.renderSubjects()}
            </div>

        );
    }
}

export default CourseChooser;
