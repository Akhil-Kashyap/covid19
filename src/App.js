import React, { Component } from 'react';
import Nav from './components/Nav/nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Stats from './pages/Stats/stats';
import News from './pages/News/news';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path="/" />
						<Route path="/news" component={News} />
						<Route path="/statistics" component={Stats} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
