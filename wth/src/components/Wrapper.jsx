import React, { Component } from 'react';
import fire from "../Fire"

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }


    render() { 
        return ( 
            <div>

                Logged in

                <button onClick={this.logout}>logout</button>

            </div>
         );
    }
}
 
export default Wrapper;