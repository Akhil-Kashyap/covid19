import React from 'react';

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
				<div className="preloader-wrapper big active loader">
					<div className="spinner-layer spinner-blue">
						<div className="circle-clipper left">
							<div className="circle" />
						</div>
						<div className="gap-patch">
							<div className="circle" />
						</div>
						<div className="circle-clipper right">
							<div className="circle" />
						</div>
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
