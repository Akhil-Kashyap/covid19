import React, { Component } from 'react';
import Nav from './components/Nav/nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Stats from './pages/Stats/stats';
import News from './pages/News/news';
import landing from './pages/Landing/landing';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path="/" component={landing} />
						<Route path="/news" component={News} />
						<Route path="/statistics" component={Stats} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
