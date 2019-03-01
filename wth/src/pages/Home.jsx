import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        };

    }

    renderSubjects() {
        let html = [];
        for (let i = 1; i <= 4; i++) {
            html.push(<div key={i} className="attributeValueActive"> </div>)
        }
    }

    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default HomePage;