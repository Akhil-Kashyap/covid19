import React from 'react';
import '../loader.css';
import { Cards, CountryPicker, Chart } from '../../components';
import { fetchData } from '../../api';
import styles from './stats.module.css';

class Stats extends React.Component {
	state = {
		data: {},
		country: '',
		loading: true
	};

	async componentDidMount() {
		const data = await fetchData();

		this.setState({ data, loading: false });
	}

	handleCountryChange = async (country) => {
		const data = await fetchData(country);

		this.setState({ data, country: country });
	};

	render() {
		const { data, country, loading } = this.state;

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
			<div className={styles.container}>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default Stats;
