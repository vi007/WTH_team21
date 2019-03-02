import React, { Component } from 'react';

class CourseChooser extends Component {
    constructor() {
        super();
        this.state = {
            study : '',
            selectedOptions : [],
            subjects: ["Dummy1", "Dumy2"],
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




    changedValue(){
        this.setState({check: ! this.state.check});
    }

    // renderSubjects() {
    //     let html = [];

    //     var data = [];
    //     var length = this.state.subjects.length; // user defined length

    //     for(var i = 0; i < length; i++) {
    //         data.push(false);
    //     }

    //     this.setState({
    //         subjects: data
    //     })
    //     for (let i = 0; i < this.state.subjects.length; i++) {

    //         html.push(<h1> {this.state.subjects[i]} </h1>)


    //     }
    //     html.push(<p><button type="button">Save</button></p>);
    //     return html
    // }


    handleSwitch(e) {
      //let array = this.state.checked;
      //array[id] = ! array[id];
        alert("switched")


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
