import React, { Component } from 'react';
import Login from './Login';
import '../App.css';
import SignUp from './SignUp';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subjects: [],
			value: 0,
		};
	}

	renderSubjects() {
		let html = [];
		for (let i = 1; i <= 4; i++) {
			html.push(
				<div key={i} className="attributeValueActive">
					{' '}
				</div>
			);
		}
	}

	render() {
		return (
			<div className='mainDiv'>
                <h1 className='headTitle' > Name Game</h1>
                
                <div style={{ display: 'flex' }}>
					<button className='homeButton' onClick={() => this.setState({ value: 0 })} style={{ float: 'left' }}>
						Login
					</button>
					<button className='homeButton' onClick={() => this.setState({ value: 1 })} style={{ float: 'right' }}>
						Register
					</button>
				</div>
                
                <p>''</p>
                
                <div className='centeredmain'>
                    <input className='loginField' placeholder='Username'/>
                    <input className='loginField' placeholder='Password'/>
                </div>

                <div className="subjectItem">

                </div>

				{this.state.value == 0 && <Login />}

				{this.state.value == 1 && <SignUp />}
			</div>
		);
	}
}

export default Home;
