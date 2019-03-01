import React, { Component } from 'react';
import List from 'react-list-select';




class CourseChooser extends Component {
    constructor() {
        super();
        this.state = {
            study : '',  
            selectedOptions : [],

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


    render() {
        let items = [
          'Google',
          'TED',
          'GitHub',
          'Big Think',
          'Microsoft',
        ]
        return (
            <div>CourseChooser
            
            
            
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit" />
            </form> 

            <List
                items={items}
                selected={[0]}
                disabled={[4]}
                multiple={true}
                onChange={(selected: number) => { console.log(selected) }}
             />
             
             
             
            

            
            
            </div>
        );
    }
}

export default CourseChooser;