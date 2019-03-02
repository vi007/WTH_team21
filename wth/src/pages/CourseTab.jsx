import React, { Component } from 'react';
import './CourseTab.css';

class CourseTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabName: props.tab, //TODO link to Subject page!!!
            elements: [{title: "Chapter one", subtitle: "Due to 4 march"}, {title: "Chapter Two", subtitle: "Due to 8 march"}, {title: "Chapter three", subtitle: "Due to 16 march"}],
            subject: props.course
        };

    }

    generateTab(number) {
        const active = Math.round(number / 100);
        let html = [];
        for (let i = 0; i < this.props.course.chapters.length; i++) {
            if (i === this.props.course.chapters.length-1) {
                html.push(
                    <div className='tabStyle'>
                        <div key={i} className="elementLabel"> {this.props.course.chapters[i]}</div> <br/>
                        <div className='elementDecriptor'>{this.state.elements[i].subtitle}</div>
                    </div>
                )    
            }
            else{
                html.push(
                    <div className='tabStyle'>
                        <div key={i} className="elementLabel"> {this.props.course.chapters[i]}</div> <br/>
                        <div className='elementDecriptor'>{this.state.elements[i].subtitle}</div>
                        <div><hr className='shorterLineTab'></hr></div>
                    </div>
                )
      
            }

        }
        return html
    }

    render() {
        return (
                <div className='contentCardLabel fadeIn0' >
                    <div className="header"> {this.state.tabName} </div>
                    {this.generateTab()}
                </div>
        );
    }
}

export default CourseTab;