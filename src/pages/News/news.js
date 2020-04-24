import React from 'react';
import '../loader.css';
import './news.css';

const url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=222921ef6aef474c8a1cf2246d24b4a3';

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			loading: true
		};
	}

	componentDidMount() {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				this.setState({
					news: myJson.articles,
					loading: false
				});
			});
	}

	removenews = (index) => {
		let arr = this.state.news;
		arr.splice(index, 1);
		this.setState({ news: arr });
	};

	render() {
		const { news, loading } = this.state;

		if (loading === true) {
			return (
				<div className="box">
					<div className="body">
						<div className="details">
							<div className="r-detail" />
							<div className="m-detail" />
							<div className="mm-detail" />
							<div className="l-detail" />
						</div>
						<div className="shapes">
							<div className="b-shape" />
							<div className="t-shape" />
							<div className="rb-shape" />
							<div className="tm-shape" />
							<div className="lm-shape" />
							<div className="rm-shape" />
							<div className="bm-shape" />
							<div className="lt-shape" />
						</div>
						<div className="sm-details">
							<div className="r-detail" />
							<div className="m-detail" />
							<div className="mm-detail" />
							<div className="l-detail" />
						</div>
						<div className="sm-shapes">
							<div className="b-shape" />
							<div className="t-shape" />
							<div className="rb-shape" />
							<div className="tm-shape" />
							<div className="lm-shape" />
							<div className="rm-shape" />
							<div className="bm-shape" />
							<div className="lt-shape" />
						</div>
					</div>
					<div className="centered">
						<div className="text">COVID-19</div>
					</div>
					<div className="message">
						Please wait... <br />Your life is on hold
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				<h3 className="center-align">Top News</h3>
				<div className="row">
					{news.slice(0, 18).map((item, index) => {
						return (
							<div className="col s12 m4" key={index}>
								<div className="card">
									<div className="card-image">
										<img className="card-img" src={item.urlToImage} alt="NewsImage" />
									</div>
									<div className="card-content grey-text text-darken-3">
										<p className="content">{item.title}</p>
									</div>
									<div className="card-action">
										<a href={item.url} rel="noopener noreferrer" target="_blank">
											Read More
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default News;
