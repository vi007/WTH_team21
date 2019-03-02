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

                
                

				{this.state.value == 0 && <Login />}

				{this.state.value == 1 && <SignUp />}
			</div>
		);
	}
}

export default Home;
