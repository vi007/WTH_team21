import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        // TODO: Ilias
        this.state = {
            username: "",
            password1: "",
            password2: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1> Sign Up</h1>
                <div className="">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="username" id="username" className="FormField__Input" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password1" className="FormField__Input" placeholder="Enter password" name="password1" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password2">Confirm password</label>
                        <input type="password" id="password2" className="FormField__Input" placeholder="Repeat password" name="password2" value={this.state.password2} onChange={this.handleChange} />
                    </div>
                </div>

                
            </div>
        );
    }
}

export default SignUp;