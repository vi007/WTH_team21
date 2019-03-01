import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import CourseChooser from './pages/CourseChooser';
import SignUp from './pages/SignUp';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import fire from './Fire.js';
import Login from './pages/Login';
import Wrapper from './components/Wrapper';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			user: undefined
		}

		this.authListener = this.authListener.bind(this);
	}

	componentDidMount(){
		this.authListener()
	}


	authListener() {
		fire.auth().onAuthStateChanged((user) => {
		  console.log(user);
		  if (user) {
			this.setState({ user });
			localStorage.setItem('user', user.uid);
		  } else {
			this.setState({ user: null });
			localStorage.removeItem('user');
		  }
		});
	  }

	render() {
		return (
			<div className="App">



				{/* <SignUp/> */}


			 	{this.state.user ? (<Wrapper/>) : (<SignUp/>) }


			</div>
		);
	}
}

export default App;
