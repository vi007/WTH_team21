import React, { Component } from 'react';

class CourseTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabName: 'tabname'
        };

    }


    render() {
        return (
            <div>
                <h1> {this.state.tabName} </h1>
            </div>
        );
    }
}

export default CourseTab;