import React, { Component } from 'react';
import CourseTab from './CourseTab';

class Subject extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjectName: 'Course Name',
            selectedTab: 0, // 0 = Lectures, 1= Exercises, 2= Studying
            checkLectures: true,
            checkExercises: false,
            checkStudying: false,
        };

        this.changedvalueLecture = this.changedvalueLecture.bind(this);
        this.changedvalueExercises = this.changedvalueExercises.bind(this);
        this.changedvalueStudying = this.changedvalueStudying.bind(this);
    }


    changedvalueLecture(){
        this.setState({selectedTab: 0, checkLectures: true});
        this.setState({checkExercises: false});
        this.setState({checkStudying: false});
    }
    changedvalueExercises(){
        this.setState({selectedTab: 1});
        this.setState({checkLectures: false});
        this.setState({checkExercises: true});
        this.setState({checkStudying: false});
    }
    changedvalueStudying(){
        this.setState({selectedTab: 2});
        this.setState({checkLectures: false});
        this.setState({checkExercises: false});
        this.setState({checkStudying: true});
    }



    render() {
        return (
            <div className="">
                <h1> {this.state.subjectName} </h1>
                <div>
                    <div className="field">
                        <input className="is-checkradio has-background-color is-danger" id="exampleRadioBackgroundColorDanger" type="radio" name="exampleRadioBackgroundColorDanger" checked={this.state.checkLectures} onChange={this.changedvalueLecture}/>
                        <label for="exampleRadioBackgroundColorDanger">Lectures</label>

                        <input className="is-checkradio has-background-color is-danger" id="exampleRadioBackgroundColorDanger" type="radio" name="exampleRadioBackgroundColorDanger" checked={this.state.checkExercises} onChange={this.changedvalueExercises}/>
                        <label for="exampleRadioBackgroundColorDanger">Exercises</label>
 
                        <input className="is-checkradio has-background-color is-danger" id="exampleRadioBackgroundColorDanger" type="radio" name="exampleRadioBackgroundColorDanger" checked={this.state.checkStudying} onChange={this.changedvalueStudying}/>
                        <label for="exampleRadioBackgroundColorDanger">Studying</label>
                    </div>
                    
                    <CourseTab>

                    </CourseTab>

                </div>
            </div>
        );
    }
}

export default Subject;