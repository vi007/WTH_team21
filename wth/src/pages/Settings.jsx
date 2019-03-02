import React, { Component } from 'react';
import bulmaSwitch from "bulma-switch"; // Laten staan, wordt wel gebruikt zelf al zegt hij van niet.
// import { disconnect } from 'cluster';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            DarkMode: true
        };
    }

    changedvalue(){
        this.setState({check: ! this.state.DarkMode});
    }

    render() {
        return (
            <div className='settingsPage'>
                
                <h1 className='headSettings'> Settings </h1>
                
                
                <div className='switchField' style={{color: 'grey'}}>
                    <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" className="switch is-rounded" checked={this.state.DarkMode} onChange={this.changedvalue}/>
                    <label for="switchRoundedDefault">Activate Dark mode</label>
                </div> <br/><br/>              
          
                
                <div className='switchLink' style={{color: 'grey'}}>

                    <label>Automatic Dark Mode</label>
                </div> <br/><br/> 
                
                <div className='line' style={{color: 'grey'}}>
                </div> <br/><br/> 
                
                <div className='switchField' style={{color: 'grey'}}>
                    <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" className="switch is-rounded" checked={this.state.DarkMode} onChange={this.changedvalue}/>
                    <label for="switchRoundedDefault">Notifications</label>
                </div> <br/><br/> 
                
                <div className='switchField' style={{color: 'grey'}}>
                    <label for="switchRoundedDefault">Notification Settings</label>
                </div> <br/><br/>
                
                <div className='line' style={{color: 'grey'}}>
                </div> <br/><br/> 
                
                <div className='switchField' style={{color: 'grey'}}>
                    <label for="switchRoundedDefault">Personal Information</label>
                </div> <br/><br/>
                
                <div className='switchField' style={{color: 'grey'}}>
                    <label for="switchRoundedDefault">Color Setting</label>
                </div> <br/><br/>
                
                <div className='switchField' style={{color: 'grey'}}>
                    <label for="switchRoundedDefault">Reset</label>
                </div> <br/><br/>
                
                
            </div>
        );
    }
}



export default Settings;