import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import CourseChooser from './pages/CourseChooser';
import SignUp from './pages/SignUp';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SignUp/>
			</div>
		);
	}
}

export default App;
