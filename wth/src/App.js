import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route to="/" exact component={HomePage} />
            <Route to="/login" exact component={HomePage}></Route>
            <Route to="/register" exact component={HomePage}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
