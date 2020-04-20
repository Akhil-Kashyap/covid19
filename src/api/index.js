import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const newsurl = 'https://cryptic-ravine-96718.herokuapp.com/';

export const fetchData = async (country) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		return error;
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		return data.map(({ confirmed, deaths, reportDate: date }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date
		}));
	} catch (error) {
		return error;
	}
};

export const fetchCountries = async () => {
	try {
		const { data: { countries } } = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	} catch (error) {
		return error;
	}
};

export const fetchNews = async () => {
	try {
		const { data } = await axios.get(newsurl);
		return data;
	} catch (error) {
		console.log(error);
	}
};
