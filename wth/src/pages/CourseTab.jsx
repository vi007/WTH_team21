import React, { Component } from 'react';

class CourseTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabName: 'tabname',
            elements: [{title: "Chapter one", subtitle: "Due to 4 march"}]

        };

    }

    generateTab(number) {
        const active = Math.round(number / 100);
        let html = [];
        for (let i = 0; i < this.state.elements.length; i++) {
            html.push(
                <div className=''>
                    <div key={i} className=""> {this.state.elements[i].title}</div>
                    <span>elements.subtitle</span> 
                </div>
            )
        }
        return html
    }


    render() {
        return (
            <div>
                <h1> {this.state.tabName} </h1>
                <div className='contentCard'>
                {this.generateSubjects()}
                </div>
                
            </div>
        );
    }
}

export default CourseTab;