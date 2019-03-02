import React, { Component } from 'react';
import './CourseTab.css';

class CourseTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabName: 'tabname',
            elements: [{title: "Chapter one", subtitle: "Due to 4 march"}, {title: "Chapter Two", subtitle: "Due to 8 march"}, {title: "Chapter three", subtitle: "Due to 16 march"}]

        };

    }

    generateTab(number) {
        const active = Math.round(number / 100);
        let html = [];
        for (let i = 0; i < this.state.elements.length; i++) {
            html.push(
                <div className='tabStyle'>
                    <div key={i} className="elementLabel"> {this.state.elements[i].title}</div>
                    <div className='elementDecriptor'>{this.state.elements[i].subtitle}</div>
                    <div><hr className='shorterLineTab'></hr></div>
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
                {this.generateTab()}
                </div>

                
            </div>
        );
    }
}

export default CourseTab;