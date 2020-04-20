import React from 'react';
import Stats from './pages/Stats/stats';
import News from './pages/News/news';
import Nav from './components/Nav/nav';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Stats />
				<News />
			</div>
		);
	}
}
