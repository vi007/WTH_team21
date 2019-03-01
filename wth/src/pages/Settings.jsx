import React, { Component } from 'react';
import bulmaSwitch from "bulma-switch";
// import { disconnect } from 'cluster';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        };

    }



    render() {
        return (
            <div><h1> Settings </h1>
                <div className="field">
                    <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" className="switch is-rounded" checked="checked"/>
                    <label for="switchRoundedDefault">Activate Dark mode</label>

                </div>
            </div>
        );
    }
}



export default Settings;