import React, { Component } from 'react';

class Deadlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [true, true, false]
        }
    }

    changeValue(e) {
        let check = this.state.checked;
        check[e] = this
        this.setState({
            checked: check
        })
    }

    renderSubjects() {
        let html = [];

        for (let i = 0; i < 3; i++) {
            html.push(<h3> Test </h3>);
            html.push(<input type="checkbox"/>);
        }
        html.push(<p><button type="button" onClick={this.changeValue}>Save</button></p>);
        return html

     }

    render() { 
        return ( 
            <div>
                {this.renderSubjects()}
            </div>
         );
    }
}
 
export default Deadlines;